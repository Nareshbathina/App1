/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import com.app1.daos.LeagueDao;
import com.app1.models.League;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author user
 */
public class LeagueService {

    @Autowired
    private LeagueDao leagueDao;

    public List<League> getAllLeagues() {
        return this.leagueDao.getAllLeagues();
    }
}
