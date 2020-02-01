/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.services;

import com.app1.daos.MatchDao;
import com.app1.models.Match;
import com.app1.models.Player;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

public class MatchService {

    @Autowired
    private MatchDao matchDao;

    public List<Match> getAllMatches() {
        return this.matchDao.getAllMatches();
    }
     public List<Match> getAllMatchesForLeague(String id) {
        return this.matchDao.getAllMatchesForLeague(id);
    }

    public List<Match> getMatcheById(String id) {
        return this.matchDao.getMatcheById(id);
    }

    public int updateMatch(Match game) {
        return this.matchDao.updateMatch(game);
    }

    public int updateMatchPoints(List<Player> players, String matchId) {

        List<Match> matches = this.getMatcheById(matchId);
        Match match = matches.get(0);
        String players1Info = match.getTeam1PlayersInfo();
        List<String> player1InfoList = Arrays.asList(players1Info.split(",", -1));
        String players2Info = match.getTeam2PlayersInfo();
        List<String> player2InfoList = Arrays.asList(players2Info.split(",", -1));
        Map<String, Player> playerData = new HashMap();
        for (Player p : players) {
            playerData.put(p.getId(), p);
        }

        List<String> b1points = new ArrayList();
        List<String> b2points = new ArrayList();
        List<String> b3points = new ArrayList();
        List<String> b4points = new ArrayList();
        for (String pId : player1InfoList) {
            Player p = playerData.get(pId);
            b1points.add(p.getB1());
            b2points.add(p.getB2());
            b3points.add(p.getB3());
            b4points.add(p.getB4());
        }
        b1points.add("-");
        b2points.add("-");
        b3points.add("-");
        b4points.add("-");

        for (String pId : player2InfoList) {
            Player p = playerData.get(pId);
            b1points.add(p.getB1());
            b2points.add(p.getB2());
            b3points.add(p.getB3());
            b4points.add(p.getB4());
        }

        String b1 = String.join(",", b1points);
        String b2 = String.join(",", b2points);
        String b3 = String.join(",", b3points);
        String b4 = String.join(",", b4points);
        match.setB1(b1);
        match.setB2(b2);
        match.setB3(b3);
        match.setB4(b4);
        
         return this.matchDao.updateMatchPoints(match);
    }

}
