/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.daos;

import com.app1.models.Horoscope;
import com.app1.models.Team;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.object.MappingSqlQuery;
import org.springframework.jdbc.object.SqlUpdate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

/**
 *
 * @author user
 */
public class HoroscopeDao {

    @Autowired
    DataSource datasource;
    @Autowired
    JdbcTemplate jdbcTemplate;
    private InsertHoroscope insertHoroscope;
    private HashMap<String, SelectHoroscope> selectHoroscopeCache = new HashMap<String, SelectHoroscope>();
     private final HashMap<String, Update> updateCache = new HashMap<String, Update>();
    private SqlParameter DATE = new SqlParameter(Types.DATE);
    private SqlParameter VCHAR = new SqlParameter(Types.VARCHAR);
    private SqlParameter INT = new SqlParameter(Types.INTEGER);
    private static String INSERT_HOROSCOPE_PARAM_VALUES = "INSERT INTO horoscope (Date,MoonPlace,MoonType,Aries,Tarus,Gemini,Cancer,Leo,Virgo,Libra,Scorpio,Sagittarius,Capricon,Aquarius,Pisces,SourceLink1,SourceLink2,SourceLink3) VALUES (?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?)";

    public void init() throws Exception {
        this.insertHoroscope = new InsertHoroscope(this.datasource);
    }

    public String insertHoroscope(Horoscope horoscope) {

        List<Object> values = new ArrayList<Object>();
        values.add(horoscope.getDate());
        values.add(horoscope.getMoonPlace());
        values.add(horoscope.getMoonType());
        values.add(horoscope.getAries());
        values.add(horoscope.getTarus());
        values.add(horoscope.getGemini());
        values.add(horoscope.getCancer());
        values.add(horoscope.getLeo());
        values.add(horoscope.getVirgo());
        values.add(horoscope.getLibra());
        values.add(horoscope.getScorpio());
        values.add(horoscope.getSagittarius());
        values.add(horoscope.getCapricorn());
        values.add(horoscope.getAquarius());
        values.add(horoscope.getPisces());
        values.add(horoscope.getSourceLink1());
        values.add(horoscope.getSourceLink2());
        values.add(horoscope.getSourceLink2());

        KeyHolder keys = new GeneratedKeyHolder();
        this.insertHoroscope.update(values.toArray(), keys);
        Number n = keys.getKey();

        return n.toString();
    }
     
     public String updateHoroscope(Horoscope horoscope) {
        String key = "[updateHoroscope]";
        Update sqlOp;
        if (this.updateCache.containsKey(key)) {
            sqlOp = this.updateCache.get(key);
        } else {
            String sql = "UPDATE Horoscope ";

            sql += " SET Date = ? ,MoonPlace = ? ,MoonType = ? ,Aries = ? ,Tarus = ? ,Gemini = ? ,Cancer = ? ,Leo = ? ,Virgo = ? ,Libra = ? ,Scorpio = ? ,Sagittarius = ? ,Capricon = ? ,Aquarius = ? ,Pisces = ? ,SourceLink1 = ? ,SourceLink2 = ? ,SourceLink3 = ? WHERE id = ?";
            SqlParameter[] params = new SqlParameter[]{VCHAR, VCHAR, VCHAR,VCHAR, VCHAR, VCHAR,VCHAR, VCHAR, VCHAR,VCHAR, VCHAR, VCHAR,VCHAR, VCHAR, VCHAR,VCHAR, VCHAR, VCHAR, INT};
            sqlOp = new Update(sql, params);
            this.updateCache.put(key, sqlOp);
        }
        Object[] vals = new Object[]{horoscope.getDate(), horoscope.getMoonPlace(), horoscope.getMoonType(), horoscope.getAries(), horoscope.getTarus(), horoscope.getGemini(), horoscope.getCancer(), horoscope.getLeo(), horoscope.getVirgo(), horoscope.getLibra(), horoscope.getScorpio(), horoscope.getSagittarius(), horoscope.getCapricorn(), horoscope.getAquarius(),horoscope.getPisces(), horoscope.getSourceLink1(), horoscope.getSourceLink2(), horoscope.getSourceLink3(), horoscope.getId()};
        int c = sqlOp.update(vals);
        return String.valueOf(c);
    }
    
    
    public List<Horoscope> getHoroscopeByDate(Date date) {
        String key = "[getHoroscopeByDate]";
        SelectHoroscope sqlOp;
        if (this.selectHoroscopeCache.containsKey(key)) {
            sqlOp = this.selectHoroscopeCache.get(key);
        } else {
            List<SqlParameter> params = new ArrayList<SqlParameter>();
            params.add(DATE);
            StringBuilder sql = new StringBuilder("SELECT * FROM Horoscope Where date=?");
            sqlOp = new SelectHoroscope(sql.toString(), params);
            this.selectHoroscopeCache.put(key, sqlOp);
        }
        List<Object> vals = new ArrayList<Object>();
        vals.add(date);
        List<Horoscope> horoscopes = sqlOp.execute(vals.toArray());
        return horoscopes;
    }

    private class SelectHoroscope extends MappingSqlQuery<Horoscope> {

        public SelectHoroscope(String sql, List<SqlParameter> params) {
            super(HoroscopeDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public SelectHoroscope(String sql, SqlParameter[] params) {
            super(HoroscopeDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        protected Horoscope mapRow(ResultSet rs, int rowNo) throws SQLException {
            Horoscope horoscope = new Horoscope();
            horoscope.setId(rs.getInt("Id"));
            horoscope.setMoonPlace(rs.getString("MoonPlace"));
            horoscope.setMoonType(rs.getString("MoonType"));
            horoscope.setDate(rs.getString("Date"));
            horoscope.setAries(rs.getString("Aries"));
            horoscope.setTarus(rs.getString("Tarus"));
            horoscope.setGemini(rs.getString("Gemini"));
            horoscope.setCancer(rs.getString("Cancer"));
            horoscope.setLeo(rs.getString("Leo"));
            horoscope.setVirgo(rs.getString("Virgo"));
            horoscope.setLibra(rs.getString("Libra"));
            horoscope.setScorpio(rs.getString("Scorpio"));
            horoscope.setSagittarius(rs.getString("Sagittarius"));
            horoscope.setCapricorn(rs.getString("Capricon"));
            horoscope.setAquarius(rs.getString("Aquarius"));
            horoscope.setPisces(rs.getString("Pisces"));
            horoscope.setSourceLink1(rs.getString("SourceLink1"));
            horoscope.setSourceLink2(rs.getString("SourceLink2"));
            horoscope.setSourceLink2(rs.getString("SourceLink2"));
            return horoscope;
        }
    }

    private class InsertHoroscope extends SqlUpdate {

        public InsertHoroscope(DataSource dataSource) {
            super(dataSource, INSERT_HOROSCOPE_PARAM_VALUES);
            this.setReturnGeneratedKeys(true);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
            declareParameter(VCHAR);
        }
    }

    private class Update extends SqlUpdate {

        public Update(String sql, SqlParameter[] params) {
            super(HoroscopeDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }

        public Update(String sql, List<SqlParameter> params) {
            super(HoroscopeDao.this.datasource, sql);
            for (SqlParameter param : params) {
                declareParameter(param);
            }
        }
    }
}
