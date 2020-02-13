/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.enums;

public enum Zsign {
    ARIES(1, "aries", "Aries",3,"3,6,6,2,7,6,4,6,9,6,6,4"),
    TARUS(2, "tarus", "Tarus",6,"7,2,4,8,6,10,7,6,3,9,3,7"),
    GEMINI(3, "gemini", "Gemini",4,"8,4,2,4,8,6,10,4,7,4,9,6"),
    CANCER(4, "cancer", "Cancer",2,"3,8,4,5,7,8,5,8,4,8,4,10"),
    LEO(5, "leo", "Leo",1,"9,6,8,7,1,5,7,4,10,5,7,6"),
    VIGRO(6, "virgo", "Virgo",4,"6,10,6,8,5,1,6,7,5,9,7,4"),
    LIBRA(7, "libra", "Libra",6,"4,7,10,5,7,6,2,6,7,4,9,6"),
    SCORPIO(8, "scorpio", "Scorpio",3,"6,6,4,8,4,7,6,2,4,7,3,10"),
    SAGITTARIUS(9, "sagittarius", "Sagittarius",5,"9,3,7,4,10,5,7,4,3,5,8,4"),
    CAPRICON(10, "capricorn", "Capricorn",7,"6,9,4,8,5,9,4,7,5,6,7,2"),
    AQUARIUS(11, "aquarius", "Aquarius",7,"6,3,9,4,7,7,9,3,8,7,5,4"),
    PISCES(12, "pisces", "Pisces",5,"4,7,6,10,6,4,6,10,4,2,4,3");
    
    final private int code;
    final private String name;
    final private String display;
    final private int grahaId;
    final private String  points;
    private Zsign(int code, String name, String display,int grahaId,String points) {
        this.code = code;
        this.name = name;
        this.display = display;
        this.grahaId = grahaId;
        this.points =points;
    }

    public int getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getDisplay() {
        return display;
    }
    
    public int getGrahaId() {
        return grahaId;
    }
    
    public String getPoints() {
        return points;
    }
    
     public static Zsign getById(int id) {
        for (Zsign e : values()) {
            if (e.code == id) {
                return e;
            }
        }
        return null;
    }
}
