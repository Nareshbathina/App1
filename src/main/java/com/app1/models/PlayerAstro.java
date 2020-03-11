/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.models;

/**
 *
 * @author use
 */
public class PlayerAstro {

    private String playerId;
    private int planetId;
    private String planetName;
    private int planetPosition;
    private String planetPositionName;
    private String planetPositionLord;
    private String planetPositionType;
    private int signId;
    private float dayPoints;
    private String hScopeResult;

    public String getPlayerId() {
        return playerId;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

    public int getPlanetId() {
        return planetId;
    }

    public void setPlanetId(int planetId) {
        this.planetId = planetId;
    }

    public int getPlanetPosition() {
        return planetPosition;
    }

    public void setPlanetPosition(int planetPosition) {
        this.planetPosition = planetPosition;
    }

    public String getPlanetPositionType() {
        return planetPositionType;
    }

    public void setPlanetPositionType(String planetPositionType) {
        this.planetPositionType = planetPositionType;
    }

    public int getSignId() {
        return signId;
    }

    public void setSignId(int signId) {
        this.signId = signId;
    }

    public float getDayPoints() {
        return dayPoints;
    }

    public void setDayPoints(float dayPoints) {
        this.dayPoints = dayPoints;
    }

    public String gethScopeResult() {
        return hScopeResult;
    }

    public void sethScopeResult(String hScopeResult) {
        this.hScopeResult = hScopeResult;
    }

    public String getPlanetName() {
        return planetName;
    }

    public void setPlanetName(String planetName) {
        this.planetName = planetName;
    }

    public String getPlanetPositionName() {
        return planetPositionName;
    }

    public void setPlanetPositionName(String planetPositionName) {
        this.planetPositionName = planetPositionName;
    }

    public String getPlanetPositionLord() {
        return planetPositionLord;
    }

    public void setPlanetPositionLord(String planetPositionLord) {
        this.planetPositionLord = planetPositionLord;
    }
    
    
    
}
