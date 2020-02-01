/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor. MatchDetailsWindow
 */
Ext.define("MyApp.view.matchDetails.MatchDetailsPanel", {
    extend: 'Ext.panel.Panel',
    requires: [],
    xtype: 'matchDetailsPanel',
    alias: 'widget.matchDetailsPanel',
    title : 'Match Details',
    layout: 'fit',
    autoHeight: true,
    height: 800,
    autoScroll: true,
    //controller: 'astroController',
    items: [{
            xtype : 'tabpanel',
            items : [{
                    xtype : 'panel',
                    title : 'Match Details'
            }]
    }
    ]

}
);

