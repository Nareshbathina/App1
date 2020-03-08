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
import com.app1.models.Match;
import com.app1.models.Player;
import com.app1.models.PlayerAstro;
import com.app1.models.ZsignModel;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.lang.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author user
 */
public class HoroscopeService {

    @Autowired
    private PlayerService playerService;
    @Autowired
    private MatchService matchService;
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

    public List<ZsignModel> getZsignsData(int id) {
        List<ZsignModel> list = new ArrayList<ZsignModel>();
        Zsign[] signs = Zsign.values();

        for (int i = 0; i < signs.length; i++) {
            Zsign sign = signs[i];
            if (id == -1 || id == sign.getCode()) {
                ZsignModel signData = new ZsignModel();
                signData.setId(sign.getCode());
                signData.setName(sign.getName());
                signData.setDisplayName(sign.getDisplay());
                signData.setPoints(sign.getPoints());
                Graha g = Graha.getById(sign.getGrahaId());
                GrahaModel grahaData = new GrahaModel();
                grahaData.setId(g.getId());
                grahaData.setName(g.getName());
                grahaData.settName(g.getTname());
                grahaData.setFriends(getGrahaData(g.getFriends()));
                grahaData.setEqual(getGrahaData(g.getEqual()));
                grahaData.setEnemies(getGrahaData(g.getEnemies()));
                signData.setGraha(grahaData);
                list.add(signData);
            }
        }
        return list;
    }

    public List<GrahaModel> getGrahaData(String ids) {
        List<GrahaModel> list = new ArrayList<GrahaModel>();
        String[] idArray = ids.split(",");
        for (int i = 0; i < idArray.length; i++) {
            int id = Integer.parseInt(idArray[i]);
            if (id > -1) {
                GrahaModel grahaData = new GrahaModel();

                Graha g = Graha.getById(id);
                grahaData.setId(g.getId());
                grahaData.setName(g.getName());
                grahaData.settName(g.getTname());
                list.add(grahaData);
            }
        }

        return list;
    }

    public List<PlayerAstro> getAstroDataForPlayers(String matchId) {
        List<Match> matches = this.matchService.getMatcheById(matchId);
        List<PlayerAstro> playerAstroList = new ArrayList();

        if (matches != null && matches.size() > 0) {
            Match m = matches.get(0);
            Horoscope hScope = this.getHorocopeForMatch(m);
            if (hScope != null) {
                String team1Players = m.getTeam1PlayersInfo();
                 String team2Players = m.getTeam2PlayersInfo();
                String[] playerIds = (String []) ArrayUtils.addAll(team1Players.split(","), team2Players.split(",")); 
                List<Player> players = this.playerService.getPlayerByPlayerIds(playerIds);
                for (Player p : players) {
                    PlayerAstro playerAstro = new PlayerAstro();
                    playerAstro.setPlayerId(p.getId());
                    Graha planet = Graha.getById(p.getPlanetId());
                    playerAstro.setPlanetName(planet.getName());
                    this.setPlanetDetails(playerAstro, p, hScope);
                    
                    playerAstro.setDayPoints(this.getPlanetPoint(p.getSunSign(), playerAstro.getPlanetPosition()));

                    playerAstroList.add(playerAstro);
                }
            }

        }
        return playerAstroList;
    }

    public Horoscope getHorocopeForMatch(Match m) {
        List<Horoscope> horoscopeData = null;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        java.util.Date date1;
        try {
            date1 = format.parse(m.getDate());
            java.sql.Date d = new java.sql.Date(date1.getTime());
            horoscopeData = this.horoscopeDao.getHoroscopeByDate(d);
        } catch (ParseException ex) {
            Logger.getLogger(HoroscopeService.class.getName()).log(Level.SEVERE, null, ex);
        }
        if (horoscopeData == null || horoscopeData.size() == 0) {
            return null;
        }
        return horoscopeData.get(0);
    }

    public float getPlanetPoint(int playerSign, int planePositionSign) {
        Zsign sign = Zsign.getById(planePositionSign);
        String[] points = sign.getPoints().split(",");
        return Float.parseFloat(points[playerSign - 1]);
    }

    public void setPlanetDetails(PlayerAstro playerAstro, Player p,Horoscope hScope) {
       playerAstro.setPlanetId(p.getPlanetId());
       playerAstro.setSignId(p.getSunSign());            
        if (p.getPlanetId() == 1) {
            playerAstro.setPlanetPosition(hScope.getSunPlace());
        } else if (p.getPlanetId() == 2) {
            playerAstro.setPlanetPosition(hScope.getMoonPlace());
        } else if (p.getPlanetId() == 3) {//mars
            playerAstro.setPlanetPosition(hScope.getMarsPlace());
        } else if (p.getPlanetId() == 4) {//mercu
            playerAstro.setPlanetPosition(hScope.getMercuryPlace());
        } else if (p.getPlanetId() == 5) {//jupi
            playerAstro.setPlanetPosition(hScope.getJupiterPlace());
        } else if (p.getPlanetId() == 6) {//venus
            playerAstro.setPlanetPosition(hScope.getVenusPlace());
        } else if (p.getPlanetId() == 7) {//saturn
            playerAstro.setPlanetPosition(hScope.getSaturnPlace());
        }
        
        if (p.getSunSign()== 1) {
            playerAstro.sethScopeResult(hScope.getAries());
        } else  if (p.getSunSign()== 2) {
            playerAstro.sethScopeResult(hScope.getTarus());
        }else  if (p.getSunSign()== 3) {
            playerAstro.sethScopeResult(hScope.getGemini());
        }else  if (p.getSunSign()== 4) {
            playerAstro.sethScopeResult(hScope.getCancer());
        }else  if (p.getSunSign()== 5) {
            playerAstro.sethScopeResult(hScope.getLeo());
        }else  if (p.getSunSign()== 6) {
            playerAstro.sethScopeResult(hScope.getVirgo());
        }else  if (p.getSunSign()== 7) {
            playerAstro.sethScopeResult(hScope.getLibra());
        }else  if (p.getSunSign()== 8) {
            playerAstro.sethScopeResult(hScope.getScorpio());
        }else  if (p.getSunSign()== 9) {
            playerAstro.sethScopeResult(hScope.getSagittarius());
        }else  if (p.getSunSign()== 10) {
            playerAstro.sethScopeResult(hScope.getCapricorn());
        }else  if (p.getSunSign()== 11) {
            playerAstro.sethScopeResult(hScope.getAquarius());
        }else  if (p.getSunSign()== 12) {
            playerAstro.sethScopeResult(hScope.getPisces());
        }
        
    }
}
