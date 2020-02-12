

Ext.define("MyApp.view.matchDetails.PlayerAnalysisPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.matchDetails.PlayerAnalysisPanelController'],
    xtype: 'playerAnalysisPanel',
    alias: 'widget.playerAnalysisPanel',
    layout: 'hbox',
    defaults: {
        margin: '5px',
    },
    controller: 'playerAnalysisPanelController',
    items: [{
            xtype: 'panel',
            flex: 1,
            items: [{
                    xtype: 'dataview',
                    store: {
                        fields: ['sName','sunsign'],
                       
                    },

                    itemTpl: '<div><div><img src="images/zodiac/{sunsign}.jpg" style="width:102px;"></div></div>'+
                       '<div class="playerInfo"><div class="playerName">{sName} <span> (L -{capacity})</span></div><div class="playerType">{type}</div><div>Form : {form}</div></div>'+
                       '<div>{graha}</div>'
                            

                }]
        }, {
            xtype: 'panel',
            title: '2',
            flex: 2
        }],
    listeners: {
        afterrender: 'onPlayerAnalysisPanelRender'
    }

});