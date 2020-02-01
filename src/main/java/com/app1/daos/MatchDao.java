/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.daos;

import com.app1.models.League;
import com.app1.models.Match;
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

public class MatchDao {

    @Autowired
    DataSource datasource;
    @Autowired
    JdbcTemplate jdbcTemplate;
    private HashMap<String, SelectMatch> selectMatchCache = new HashMap<String, SelectMatch>();
    private final Map<String, Update> updateCache = new HashMap<String, Update>();

    private SqlParameter VCHAR = new SqlParameter(Types.VARCHAR);

    public List<Match> getMatcheById(String id) {
        String key = "[getMatcheById]";
        SelectMatch sqlOp;
        if (this.selectMatchCache.containsKey(key)) {
            sqlOp = this.selectMatchCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            StringBuilder sql = new StringBuilder("SELECT a.*, CONCAT(l.Name,'-',b.Name ,'-', c.Name) as Title FROM Matches a, Team b, Team c,League l\n"
                    + "WHERE a.team1Id = b.id and a.team2Id = c.id and a.leagueId = l.id and a.id=?;");
            params.add(VCHAR);
            sqlOp = new SelectMatch(sql.toString(), params);
            this.selectMatchCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(id);
        List<Match> matches = sqlOp.execute(vals.toArray());
        return matches;
    }
    
    
    public List<Match> getAllMatches() {
        String key = "[getAllMatches1]";
        SelectMatch sqlOp;
        if (this.selectMatchCache.containsKey(key)) {
            sqlOp = this.selectMatchCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            StringBuilder sql = new StringBuilder("SELECT a.*, CONCAT(l.Name,'-',b.Name ,'-', c.Name) as Title FROM Matches a, Team b, Team c,League l\n"
                    + "WHERE a.team1Id = b.id and a.team2Id = c.id and a.leagueId = l.id;");
            sqlOp = new SelectMatch(sql.toString(), params);
            this.selectMatchCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        List<Match> matches = sqlOp.execute(vals.toArray());
        return matches;
    }
      public List<Match> getAllMatchesForLeague(String id) {
        String key = "[getAllMatchesForLeague]";
        SelectMatch sqlOp;
        if (this.selectMatchCache.containsKey(key)) {
            sqlOp = this.selectMatchCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            StringBuilder sql = new StringBuilder("SELECT a.*, CONCAT(l.Name,'-',b.Name ,'-', c.Name) as Title FROM Matches a, Team b, Team c,League l\n"
                    + "WHERE a.team1Id = b.id and a.team2Id = c.id and a.leagueId = l.id and a.leagueId=?;");
            params.add(VCHAR);
            sqlOp = new SelectMatch(sql.toString(), params);
            this.selectMatchCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
         vals.add(id);
        List<Match> matches = sqlOp.execute(vals.toArray());
        return matches;
    }

    public int updateMatch(Match match) {
        String key = "[updateMatch2]";
        Update sqlOp;
        if (this.updateCache.containsKey(key)) {
            sqlOp = this.updateCache.get(key);
        } else {
            String sql = "UPDATE matches SET Team1PlayersInfo = ? , Team2PlayersInfo = ?   WHERE  id = ? ";
            SqlParameter[] params = new SqlParameter[]{VCHAR, VCHAR, VCHAR};
            sqlOp = new Update(sql, params);
            this.updateCache.put(key, sqlOp);
        }
        Object[] vals = new Object[]{match.getTeam1PlayersInfo(), match.getTeam2PlayersInfo(), match.getId()};
        int c = sqlOp.update(vals);
        return c;
    }
     public int updateMatchPoints(Match match) {
        String key = "[updateMatchPoints1]";
        Update sqlOp;
        if (this.updateCache.containsKey(key)) {
            sqlOp = this.updateCache.get(key);
        } else {
            String sql = "UPDATE matches SET B1 = ? , B2 = ?, B3 = ?, B4 = ?   WHERE  id = ? ";
            SqlParameter[] params = new SqlParameter[]{VCHAR, VCHAR, VCHAR,VCHAR,VCHAR};
            sqlOp = new Update(sql, params);
            this.updateCache.put(key, sqlOp);
        }
        Object[] vals = new Object[]{match.getB1(), match.getB2(),match.getB3(), match.getB4(), match.getId()};
        int c = sqlOp.update(vals);
        return c;
    }
    private class SelectMatch extends MappingSqlQuery<Match> {

        public SelectMatch(String sql, List<SqlParameter> params) {
            super(MatchDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public SelectMatch(String sql, SqlParameter[] params) {
            super(MatchDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        protected Match mapRow(ResultSet rs, int rowNo) throws SQLException {
            Match match = new Match();
            match.setId(rs.getString("Id"));
            match.setLeagueId(rs.getString("LeagueId"));
            match.setTeam1Id(rs.getString("Team1Id"));
            match.setTeam2Id(rs.getString("Team2Id"));
            match.setTeam1PlayersInfo(rs.getString("Team1PlayersInfo"));
            match.setTeam2PlayersInfo(rs.getString("Team2PlayersInfo"));
            match.setDate(rs.getString("Date"));
            match.setVenu(rs.getString("Venu"));
            match.setMoonPlace(rs.getString("MoonPlace"));
            match.setDescription(rs.getString("Description"));
            match.setResult(rs.getString("Result"));
            match.setTitle(rs.getString("Title"));
            match.setB1(rs.getString("B1"));
            match.setB2(rs.getString("B2"));
            match.setB3(rs.getString("B3"));
            match.setB4(rs.getString("B4"));
            return match;
        }
    }

    private class Update extends SqlUpdate {

        public Update(String sql, SqlParameter[] params) {
            super(MatchDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public Update(String sql, List<SqlParameter> params) {
            super(MatchDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }
    }

}
