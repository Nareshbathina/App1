/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import com.app1.daos.PlayerDao;
import com.app1.models.BrokerPlayer;
import com.app1.models.Player;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


public class PlayerService {

    @Autowired
    private PlayerDao teamDao;
    
    public List<Player> getAllPlayersByTeamId(String teamId) {
        return this.teamDao.getAllPlayersByTeamId(teamId);
    }
    public List<BrokerPlayer> getBrokerPlayerByPlayerId(String playerId) {
        return this.teamDao.getBrokerPlayerByPlayerId(playerId);
    }
    
}
