/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.app1.enums;

public enum Graha {
    SUN(1, "Sun", "Ravi", "2,3,5", "4", "6,7"),
    MOON(2, "Moon", "Chandra", "1,4", "3,5,6,7", ""),
    MARS(3, "Mars", "kuja", "1,2,5", "6,7", "4"),
    MERCURY(4, "Mercury", "Budha", "1,6", "3,5,7", "2"),
    JUPITER(5, "Jupiter", "Guru", "1,2,3", "7", "4,6"),
    VENUS(6, "Venus", "Sukra", "4,7", "5,3", "1,2"),
    SATURN(7, "Saturn", "shani", "4,6", "5", "1,2,3"),
    DHEAD(8, "Dragons head", "Rahu", "", "", ""),
    DTAIL(9, "Dragons tail", "Ketu", "", "", "");

    final private int id;
    final private String name;
    final private String tname;
    final private String friends;
    final private String equal;
    final private String enemies;

    private Graha(int id, String name, String tname, String friends, String equal, String enemies) {
        this.id = id;
        this.name = name;
        this.tname = tname;
        this.friends = friends;
        this.equal = equal;
        this.enemies = enemies;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTname() {
        return tname;
    }
     public String getFriends() {
        return friends;
    }
      public String getEqual() {
        return equal;
    }
       public String getEnemies() {
        return enemies;
    }
    public static Graha getById(int id) {
        for (Graha e : values()) {
            if (e.id == id) {
                return e;
            }
        }
        return null;
    }
}
