/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import com.app1.daos.TeamDao;
import com.app1.models.Team;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

public class TeamService {

    @Autowired
    private TeamDao teamDao;
    
    public List<Team> getAllTeamForLeague(String leagueId) {
        return this.teamDao.getAllTeamsByLeagueId(leagueId);
    }
}
