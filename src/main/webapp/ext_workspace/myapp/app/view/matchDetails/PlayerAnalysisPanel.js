

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
            flex: 2,
            layout: 'column',
            items: [{
                    xtype: 'dataview',
                    columnWidth: 1,
                    store: {
                        fields: ['sName', 'sunsign'],

                    },
                    itemTpl: '<div><div><img src="images/zodiac/{sunsign}.jpg" style="width:102px;"></div></div>' +
                            '<div class="playerInfo"><div class="playerName">{sName} <span> (L -{capacity})</span></div><div class="playerType">{typeName}</div><div>Form : {form}</div></div>' +
                            '<div>{graha}</div>'
                }, {
                    xtype: 'panel',
                    columnWidth: 1,
                    layout: 'column',
                    defaults: {
                        xtype: 'grid',
                        margin:'5px',
                        columnWidth: .25,
                        height: 500,
                        autoScroll: true,
                        hideHeaders: true,
                        store: {
                            type: 'playerStore'
                        },
                        columns: [
                            {text: 'Id', dataIndex: 'id', hidden: true},
                            {xtype: 'templatecolumn', text: 'Name', flex: 1,
                                tpl: '<div><img src="images/avatar/avatar1.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" title="{sunsign}"style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{typeImg}" style="width: 22px;"> </div>'},
                            {text: 'dayPoints',width:30, dataIndex: 'dayPoints'}
                        ]
                    },
                    items: [{
                            itemId: 'friendsGrid',
                        }, {
                            itemId: 'enimiesGrid',
                        }, {
                            itemId: 'equalGrid',
                        }, {
                            itemId: 'othersGrid',
                        }]
                }]
        }, {
            xtype: 'panel',
            title: '2',
            flex: 1
        }],
    listeners: {
        afterrender: 'onPlayerAnalysisPanelRender'
    }

});