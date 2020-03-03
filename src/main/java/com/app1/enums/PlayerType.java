/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.enums;

/**
 *
 * @author use
 */
public enum PlayerType {
    
    WICKETKEEPER(1, "WicketKeeper", "WicketKeeper.png"),
    BATSMAN(2, "BATSMAN", "Batsman.png"),
    ALLROUNDER(3, "ALLROUNDER", "AllRounder.png"),
    SPINNER(4, "SPINNER", "spinner.jpg"),
    BOWLER(5, "BOWLER", "Bowler.png");
    
    
    final private int id;
    final private String name;
    final private String display;

    private PlayerType(int id,String name,String display){
        this.id = id;
        this.name = name;
        this.display = display;

    }
    public int geId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDisplay() {
        return display;
    }
    
     public static PlayerType getById(int id) {
        for (PlayerType e : values()) {
            if (e.id == id) {
                return e;
            }
        }
        return null;
    }
    
            

}
