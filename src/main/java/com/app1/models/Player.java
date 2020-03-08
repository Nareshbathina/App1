/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.models;

import com.app1.enums.PlayerType;
import com.app1.enums.Zsign;

/**
 *
 * @author user
 */
public class Player {

    String id;
    String teamId;
    String name;
    String ShortName;
    String dob;
    int sunSign;
    int moonSign;
    int type;
    int form;
    int level;
    String description;
    String country;
    String b1;
    String b2;
    String b3;
    String b4;
    
    int planetId = -1;
    String signPoints;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTeamId() {
        return teamId;
    }

    public void setTeamId(String teamId) {
        this.teamId = teamId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return ShortName;
    }

    public void setShortName(String ShortName) {
        this.ShortName = ShortName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public int getSunSign() {
        return sunSign;
    }

    public void setSunSign(int sunSign) {
        this.sunSign = sunSign;
    }

    public int getMoonSign() {
        return moonSign;
    }

    public void setMoonSign(int moonSign) {
        this.moonSign = moonSign;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getForm() {
        return form;
    }

    public void setForm(int form) {
        this.form = form;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getB1() {
        return b1;
    }

    public void setB1(String b1) {
        this.b1 = b1;
    }

    public String getB2() {
        return b2;
    }

    public void setB2(String b2) {
        this.b2 = b2;
    }

    public String getB3() {
        return b3;
    }

    public void setB3(String b3) {
        this.b3 = b3;
    }

    public String getB4() {
        return b4;
    }

    public void setB4(String b4) {
        this.b4 = b4;
    }

    public int getPlanetId() {
        return planetId;
    }

    public void setPlanetId(int planetId) {
        this.planetId = planetId;
    }

    public String getSignPoints() {
        return signPoints;
    }

    public void setSignPoints(String signPoints) {
        this.signPoints = signPoints;
    }
    
    
     public String getSunSignName() {
        if (sunSign != -1) {
            Zsign sign = Zsign.getById(sunSign);
            return sign.getDisplay();
        }
        return "";
    }
     public String getPlayerTypeImg() {
        if (type != -1) {
            PlayerType tye = PlayerType.getById(type);
            return tye.getDisplay();
        }
        return "";
    }
}
