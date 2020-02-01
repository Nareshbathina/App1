/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.controllers;

import com.app1.models.Team;
import com.app1.services.TeamService;
import com.app1.views.VelocityTemplateView;
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
public class TeamController {

    @Autowired
    TeamService teamService;

    @RequestMapping(value = "getAllTeamsForLeague.htm", method = RequestMethod.GET)
    public ModelAndView getAllTeamsForLeague(@RequestParam String leagueId) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Team> teams = this.teamService.getAllTeamForLeague(leagueId);
            data.put("teams", teams);
            data.put("totalCount", teams.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("Teams.vm"), model);
    }
}
