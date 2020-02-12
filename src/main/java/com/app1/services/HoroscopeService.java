/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import com.app1.daos.HoroscopeDao;
import com.app1.enums.Graha;
import com.app1.enums.Zsign;
import com.app1.models.GrahaModel;
import com.app1.models.Horoscope;
import com.app1.models.ZsignModel;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author user
 */
public class HoroscopeService {

    @Autowired
    private HoroscopeDao horoscopeDao;

    public String saveHoroscope(Horoscope horoscope) {
        if (horoscope.getId() > -1) {
            return this.horoscopeDao.updateHoroscope(horoscope);
        } else {
            return this.horoscopeDao.insertHoroscope(horoscope);
        }

    }

    public List<Horoscope> getHoroscopeByDate(Date date) {
        return this.horoscopeDao.getHoroscopeByDate(date);
    }

    public List<ZsignModel> getZsignsData() {
        List<ZsignModel> list = new ArrayList<ZsignModel>();
        Zsign[] signs = Zsign.values();

        for (int i = 0; i < signs.length; i++) {
            Zsign sign = signs[i];
            ZsignModel signData = new ZsignModel();
            signData.setId(sign.getCode());
            signData.setName(sign.getName());
            signData.setDisplayName(sign.getDisplay());
            Graha g = Graha.getById(sign.getGrahaId());
            GrahaModel grahaData = new GrahaModel();
            grahaData.setId(g.getId());
            grahaData.setName(g.getName());
            grahaData.settName(g.getTname());
            grahaData.setFriends(getGrahaData(g.getFriends()));
            grahaData.setEqual(getGrahaData(g.getEqual()));
            grahaData.setEnemies(getGrahaData(g.getEnemies()));
            list.add(signData);
        }
        return list;
    }

    public List<GrahaModel> getGrahaData(String ids) {
        List<GrahaModel> list = new ArrayList<GrahaModel>();
        String[] idArray = ids.split(",");
        for (int i = 0; i < idArray.length; i++) {
            GrahaModel grahaData = new GrahaModel();
            int id = Integer.parseInt(idArray[i]);
            Graha g = Graha.getById(id);
            grahaData.setId(g.getId());
            grahaData.setName(g.getName());
            grahaData.settName(g.getTname());
            list.add(grahaData);
        }

        return list;
    }

}
