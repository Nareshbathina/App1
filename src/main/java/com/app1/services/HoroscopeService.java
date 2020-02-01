/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import com.app1.daos.HoroscopeDao;
import com.app1.models.Horoscope;
import java.sql.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author user
 */
public class HoroscopeService {

    @Autowired
    private HoroscopeDao horoscopeDao;
    
    
    public String saveHoroscope(Horoscope horoscope){
        if(horoscope.getId() > -1){
         return this.horoscopeDao.updateHoroscope(horoscope);
        }else{
         return this.horoscopeDao.insertHoroscope(horoscope);
        }
       
    }
    
    
    
    public List<Horoscope> getHoroscopeByDate(Date date) {
        return this.horoscopeDao.getHoroscopeByDate(date);
    }
}
