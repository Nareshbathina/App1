/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.models;

import java.util.List;

/**
 *
 * @author use
 */
public class GrahaModel {

    private int id;
    private String name;
    private String tName;
    private List<GrahaModel> friends;
    private List<GrahaModel> equal;
    private List<GrahaModel> enemies;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String gettName() {
        return tName;
    }

    public void settName(String tName) {
        this.tName = tName;
    }

    public List<GrahaModel> getFriends() {
        return friends;
    }

    public void setFriends(List<GrahaModel> friends) {
        this.friends = friends;
    }

    public List<GrahaModel> getEqual() {
        return equal;
    }

    public void setEqual(List<GrahaModel> equal) {
        this.equal = equal;
    }

    public List<GrahaModel> getEnemies() {
        return enemies;
    }

    public void setEnemies(List<GrahaModel> enemies) {
        this.enemies = enemies;
    }

}
