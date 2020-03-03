/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.daos;

import com.app1.models.BrokerPlayer;
import com.app1.models.Player;
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

public class PlayerDao {

    @Autowired
    DataSource datasource;
    @Autowired
    JdbcTemplate jdbcTemplate;

    private HashMap<String, SelectPlayer> selectPlayerCache = new HashMap<String, SelectPlayer>();
    private HashMap<String, SelectBrokerPlayer> selectBrokerPlayerCache = new HashMap<String, SelectBrokerPlayer>();
    private SqlParameter VCHAR = new SqlParameter(Types.VARCHAR);

    public List<Player> getAllPlayersByTeamId(String teamId) {
        String key = "[getAllPlayersByTeamId]";
        SelectPlayer sqlOp;
        if (this.selectPlayerCache.containsKey(key)) {
            sqlOp = this.selectPlayerCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            params.add(VCHAR);
            StringBuilder sql = new StringBuilder("SELECT * FROM Player Where TeamId = ? ");

            sqlOp = new SelectPlayer(sql.toString(), params);
            this.selectPlayerCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(teamId);
        List<Player> players = sqlOp.execute(vals.toArray());
        return players;
    }
     public List<BrokerPlayer> getBrokerPlayerByPlayerId(String playerId) {
        String key = "[getBrokerPlayerByPlayerId]";
        SelectBrokerPlayer sqlOp;
        if (this.selectBrokerPlayerCache.containsKey(key)) {
            sqlOp = this.selectBrokerPlayerCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            params.add(VCHAR);
            StringBuilder sql = new StringBuilder("SELECT * FROM BrokerPlayer Where PlayerId = ? ");

            sqlOp = new SelectBrokerPlayer(sql.toString(), params);
            this.selectBrokerPlayerCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(playerId);
        List<BrokerPlayer> players = sqlOp.execute(vals.toArray());
        return players;
    }
    public List<BrokerPlayer> getBrokerPlayersByTeamId(String teamId) {
        String key = "[getBrokerPlayersByTeamId]";
        SelectBrokerPlayer sqlOp;
        if (this.selectBrokerPlayerCache.containsKey(key)) {
            sqlOp = this.selectBrokerPlayerCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            params.add(VCHAR);
            StringBuilder sql = new StringBuilder("SELECT * FROM BrokerPlayer Where TeamId = ? ");

            sqlOp = new SelectBrokerPlayer(sql.toString(), params);
            this.selectBrokerPlayerCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(teamId);
        List<BrokerPlayer> players = sqlOp.execute(vals.toArray());
        return players;
    }

    private class SelectPlayer extends MappingSqlQuery<Player> {

        public SelectPlayer(String sql, List<SqlParameter> params) {
            super(PlayerDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public SelectPlayer(String sql, SqlParameter[] params) {
            super(PlayerDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        protected Player mapRow(ResultSet rs, int rowNo) throws SQLException {
            Player player = new Player();
            player.setId(rs.getString("Id"));
            player.setName(rs.getString("Name"));
            player.setDescription(rs.getString("Description"));
            player.setTeamId(rs.getString("TeamId"));
            player.setShortName(rs.getString("ShortName"));
            player.setType(rs.getInt("PlayerType"));
            player.setForm(rs.getInt("Form"));
            player.setSunSign(rs.getInt("SunSign"));
            player.setMoonSign(rs.getInt("MoonSign"));
            player.setLevel(rs.getInt("PlayerLevel"));
            return player;
        }
    }

    private class SelectBrokerPlayer extends MappingSqlQuery<BrokerPlayer> {

        public SelectBrokerPlayer(String sql, List<SqlParameter> params) {
            super(PlayerDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public SelectBrokerPlayer(String sql, SqlParameter[] params) {
            super(PlayerDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        protected BrokerPlayer mapRow(ResultSet rs, int rowNo) throws SQLException {
            BrokerPlayer player = new BrokerPlayer();
            player.setId(rs.getString("Id"));
            player.setBrokerId(rs.getString("BrokerId"));
            player.setPlayerId(rs.getString("PlayerId"));
            player.setPoints(rs.getFloat("Points"));
            player.setCredits(rs.getFloat("Credits"));
            player.setType(rs.getInt("PlayerType"));
            return player;
        }
    }

}
