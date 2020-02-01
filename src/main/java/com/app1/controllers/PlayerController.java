/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.controllers;

import com.app1.models.BrokerPlayer;
import com.app1.models.Player;
import com.app1.services.PlayerService;
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
public class PlayerController {

    @Autowired
    PlayerService playerService;

    @RequestMapping(value = "getAllPlayersByTeamId.htm", method = RequestMethod.GET)
    public ModelAndView getAllPlayersByTeamId(@RequestParam String teamId) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<Player> players = this.playerService.getAllPlayersByTeamId(teamId);

            data.put("players", players);
            data.put("totalCount", players.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("Players.vm"), model);
    }
    
     @RequestMapping(value = "getBrokerPlayerByPlayerId.htm", method = RequestMethod.GET)
    public ModelAndView getBrokerPlayerByPlayerId(@RequestParam String playerId) {
        HashMap<String, Object> model = new HashMap<String, Object>();
        VelocityContext data = new VelocityContext();
        try {
            List<BrokerPlayer> players = this.playerService.getBrokerPlayerByPlayerId(playerId);

            data.put("players", players);
            data.put("totalCount", players.size());
            data.put("success", true);
        } catch (Exception e) {
            data.put("success", false);
            data.put("message", e.getMessage());
        }
        model.put("context", data);
        return new ModelAndView(new VelocityTemplateView("BrokerPlayers.vm"), model);
    }
    
    
}
