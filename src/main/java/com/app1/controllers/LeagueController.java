/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.controllers;

import com.app1.models.League;
import com.app1.services.LeagueService;
import com.app1.views.VelocityTemplateView;
import java.util.HashMap;
import java.util.List;
import org.apache.velocity.VelocityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author user
 */
@Controller
public class LeagueController {

    @Autowired
    private LeagueService leagueService;

    @RequestMapping(value = "getAllLeagues.htm", method = RequestMethod.GET)
    public ModelAndView getAllLeagues() {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<League> leagues = this.leagueService.getAllLeagues();
            data.put("leagues", leagues);
            data.put("totalCount", leagues.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("Leagues.vm"), model);
    }
   @RequestMapping(value = "getAllLeaguesForCal.htm", method = RequestMethod.GET)
    public ModelAndView getAllLeaguesForCal() {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<League> leagues = this.leagueService.getAllLeagues();
            data.put("leagues", leagues);
            data.put("totalCount", leagues.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("CalLeagues.vm"), model);
    }
}
