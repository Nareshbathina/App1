/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.controllers;

import com.app1.models.Match;
import com.app1.models.Player;
import com.app1.services.MatchService;
import com.app1.views.VelocityTemplateView;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import java.util.HashMap;
import java.util.List;
import org.apache.velocity.VelocityContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MatchController {

    @Autowired
    private MatchService matchService;
    private Gson gson = new GsonBuilder().create();

    @RequestMapping(value = "getAllMatches.htm", method = RequestMethod.GET)
    public ModelAndView getAllMatches() {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Match> matches = this.matchService.getAllMatches();
            data.put("matches", matches);
            data.put("totalCount", matches.size());
            data.put("success", true);
            data.put("teamInfo", false);

        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("Matches.vm"), model);
    }
      @RequestMapping(value = "getAllMatchesForLeague.htm", method = RequestMethod.GET)
    public ModelAndView getAllMatchesForLeague(String calendar) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Match> matches = this.matchService.getAllMatchesForLeague(calendar);
            data.put("matches", matches);
            data.put("totalCount", matches.size());
            data.put("success", true);
            data.put("teamInfo", false);

        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("CalMatches.vm"), model);
    }
    @RequestMapping(value = "getMatchDetails.htm", method = RequestMethod.GET)
    public ModelAndView getMatchDetails(String id) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Match> matches = this.matchService.getMatcheById(id);
            data.put("matches", matches);
            data.put("totalCount", matches.size());
            data.put("success", true);
            data.put("teamInfo", true);

        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("Matches.vm"), model);
    }

    @RequestMapping(value = "saveMatch.htm", method = RequestMethod.POST)
    public ModelAndView saveMatch(@RequestParam String matchJson) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            Match match = gson.fromJson(matchJson, new TypeToken<Match>() {
            }.getType());

            this.matchService.updateMatch(match);

            data.put("message", "Match Saved successfully");
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("MessageJSON.vm"), model);
    }

    @RequestMapping(value = "saveMatchPoints.htm", method = RequestMethod.POST)
    public ModelAndView saveMatchPoints(@RequestParam String playersJson, @RequestParam String matchId) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Player> players = gson.fromJson(playersJson, new TypeToken<List<Player>>() {
            }.getType());

            this.matchService.updateMatchPoints(players, matchId);

            data.put("message", "Match points Saved successfully");
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("MessageJSON.vm"), model);
    }

}
