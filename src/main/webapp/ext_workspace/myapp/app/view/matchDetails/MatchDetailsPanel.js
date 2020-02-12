/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor. MatchDetailsWindow
 */
Ext.define("MyApp.view.matchDetails.MatchDetailsPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.matchDetails.MatchDetailsController','MyApp.view.matchDetails.AnalysisPanel'],
    xtype: 'matchDetailsPanel',
    alias: 'widget.matchDetailsController',
    headerPosition : 'left',
    title : 'Match Details',
    layout: 'fit',
    autoHeight: true,
    height: 800,
    autoScroll: true,
    controller: 'matchDetailsController',
    items: [{
            xtype : 'tabpanel',
            itemId : 'mainTabPanel',
            defaults : {
                xtype : 'panel'
            },
            items : [{
                    title : 'Match Details',
                    xtype : 'analysisPanel'
            }]
    }
    ]

}
);

