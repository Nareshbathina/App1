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
public class ZsignModel {

    private int id;
    private String name;
    private String displayName;
    private String points;
    private GrahaModel graha;

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

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getPoints() {
        return points;
    }

    public void setPoints(String points) {
        this.points = points;
    }

    public GrahaModel getGraha() {
        return graha;
    }

    public void setGraha(GrahaModel graha) {
        this.graha = graha;
    }

    public String getPointsArry(int idx) {
        String[] points = this.points.split(",");
        if (points != null) {
            return this.points.split(",")[idx];
        }
        return "0";
    }
}
