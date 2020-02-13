/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.controllers;

import com.app1.models.Horoscope;
import com.app1.models.Match;
import com.app1.models.ZsignModel;
import com.app1.services.HoroscopeService;
import com.app1.services.MatchService;
import com.app1.views.VelocityTemplateView;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import org.apache.velocity.VelocityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author user
 */
@Controller
public class HoroscopeController {
    @Autowired
    private HoroscopeService horoscopeService;
    private Gson gson = new GsonBuilder().create();

    
     @RequestMapping(value = "saveHoroscope.htm", method = RequestMethod.POST)
    public ModelAndView saveHoroscope(@RequestParam String horoscopeJson) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            Horoscope horoscope = gson.fromJson(horoscopeJson, new TypeToken<Horoscope>() {
            }.getType());
            
            SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
            java.util.Date date1 = format.parse(horoscope.getDate());
            java.sql.Date d = new java.sql.Date(date1.getTime()); 
            horoscope.setDate(d.toString());
           this.horoscopeService.saveHoroscope(horoscope);
            data.put("message", "Horoscope Saved successfully");
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("MessageJSON.vm"), model);
    }
    
    
    @RequestMapping(value = "getAllHoroscopesByDate.htm", method = RequestMethod.GET)
    public ModelAndView getAllHoroscopesByDate(@RequestParam String date) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Horoscope> horoscopeData = null;
            SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
            java.util.Date date1 = format.parse(date);
            java.sql.Date d = new java.sql.Date(date1.getTime()); 
            horoscopeData = this.horoscopeService.getHoroscopeByDate(d);
            data.put("horoscopes", horoscopeData);
            data.put("totalCount", horoscopeData.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("horoscopeList.vm"), model);
    }
    
    @RequestMapping(value = "getZsignsData.htm", method = RequestMethod.GET)
    public ModelAndView getZsignsData(@RequestParam int id) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<ZsignModel> zSignData = null;
            
            zSignData = this.horoscopeService.getZsignsData(id);
            data.put("zSignData", zSignData);
            data.put("totalCount", zSignData.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("zsignList.vm"), model);
    }
}
