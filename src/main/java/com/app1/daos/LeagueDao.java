/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.daos;

import com.app1.models.League;
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
public class LeagueDao {
    
    @Autowired
    DataSource datasource;
    @Autowired
    JdbcTemplate jdbcTemplate;
    private HashMap<String, SelectLeague> selectLeagueCache = new HashMap<String, SelectLeague>();
    
     public List<League> getAllLeagues() {
        String key = "[getAllLeagues]";
        SelectLeague sqlOp;
        if (this.selectLeagueCache.containsKey(key)) {
            sqlOp = this.selectLeagueCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            StringBuilder sql = new StringBuilder("SELECT * FROM League ");
            sqlOp = new SelectLeague(sql.toString(), params);
            this.selectLeagueCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        List<League> leagues = sqlOp.execute(vals.toArray());
        return leagues;
    }
    
     
     private class SelectLeague extends MappingSqlQuery<League> {
        public SelectLeague(String sql, List<SqlParameter> params) {
            super(LeagueDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }
        public SelectLeague(String sql, SqlParameter[] params) {
            super(LeagueDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        protected League mapRow(ResultSet rs, int rowNo) throws SQLException {
            League league = new League();
            league.setName(rs.getString("Name"));
            league.setCode(rs.getString("Code"));
            league.setId(rs.getString("Id"));
            league.setLogoPath(rs.getString("LogoPath"));
            return league;
        }
    }
}
