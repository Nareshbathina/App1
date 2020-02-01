/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.daos;

import com.app1.models.Team;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.MappingSqlQuery;
import org.springframework.jdbc.object.SqlUpdate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

public class TeamDao {

    @Autowired
    DataSource datasource;
    @Autowired
    JdbcTemplate jdbcTemplate;

    private HashMap<String, SelectTeam> selectTeamCache = new HashMap<String, SelectTeam>();
    private SqlParameter VCHAR = new SqlParameter(Types.VARCHAR);

    public List<Team> getAllTeamsByLeagueId(String leagueId) {
        String key = "[getAllTeamsByLeagueId]";
        SelectTeam sqlOp;
        if (this.selectTeamCache.containsKey(key)) {
            sqlOp = this.selectTeamCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            params.add(VCHAR);
            StringBuilder sql = new StringBuilder("SELECT * FROM Team Where leagueId=?");
            sqlOp = new SelectTeam(sql.toString(), params);
            this.selectTeamCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(leagueId);
        List<Team> teams = sqlOp.execute(vals.toArray());
        return teams;
    }

    public List<Team> getAllTeamsByTeamId(String teamId) {
        String key = "[getAllTeamsByTeamId]";
        SelectTeam sqlOp;
        if (this.selectTeamCache.containsKey(key)) {
            sqlOp = this.selectTeamCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            params.add(VCHAR);
            StringBuilder sql = new StringBuilder("SELECT * FROM Team Where Id=?");
            sqlOp = new SelectTeam(sql.toString(), params);
            this.selectTeamCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(teamId);
        List<Team> teams = sqlOp.execute(vals.toArray());
        return teams;
    }
    
    
    private class SelectTeam extends MappingSqlQuery<Team> {

        public SelectTeam(String sql, List<SqlParameter> params) {
            super(TeamDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public SelectTeam(String sql, SqlParameter[] params) {
            super(TeamDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        protected Team mapRow(ResultSet rs, int rowNo) throws SQLException {
            Team team = new Team();
            team.setName(rs.getString("Name"));
            team.setCode(rs.getString("Code"));
            team.setId(rs.getString("Id"));
            team.setLeagueId(rs.getString("LeagueId"));
            team.setLogoPath(rs.getString("LogoPath"));
            return team;
        }
    }
}
