/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("MyApp.view.matchDetails.AnalysisPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.store.MatchStore','MyApp.view.matchDetails.PlayerAnalysisPanel'],
    xtype: 'analysisPanel',
    alias: 'widget.analysisPanel',
    layout: 'column',
    defaults: {
        margin: '5px'
    },
    items: [{
            xtype: 'panel',
            margin: '20px 10px',
            layout: 'column',
            columnWidth: 1,
            defaults: {
                margin: '5px'
            },
            items: [{
                    xtype: 'combobox',
                    columnWidth: .25,
                    itemId: 'leagueCmb',
                    name: 'leagueId',
                    fieldLabel: 'League',
                    valueField: 'id',
                    displayField: 'name',
                    store: Ext.create('MyApp.store.LeagueStore', {
                        autoLoad: true
                    })
                }, {
                    xtype: 'combobox',
                    columnWidth: .25,
                    itemId: 'matchCmb',
                    name: 'matchId',
                    fieldLabel: 'Matches',
                    valueField: 'id',
                    displayField: 'description',
                    store: Ext.create('MyApp.store.MatchStore', {
                        autoLoad: false
                    }),

                }]

        }, {
            xtype: 'panel',
            layout: 'column',
            title: 'Teams',
            collapsible: true,
            columnWidth: .4,
            defaults: {
                margin: '5px',
                hideHeaders: true
            },
            items: [{
                    xtype: 'grid',
                    columnWidth: .5,
                    itemId: 'team1PlayerAnalysis',
                    store: {
                        type: 'playerStore'
                    },
                    columns: [
                        {text: 'Id', dataIndex: 'id', hidden: true},
                        {xtype: 'templatecolumn', text: 'Name', flex: 1,
                            tpl: '<div><img src="images/avatar/avatar1.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{type}.png" style="width: 22px;"> </div>'},
                    ]
                }, {
                    xtype: 'grid',
                    columnWidth: .5,
                    itemId: 'team2PlayerAnalysis',
                    store: {
                        type: 'playerStore'
                    },
                    columns: [
                        {text: 'Id', dataIndex: 'id', hidden: true},
                        {xtype: 'templatecolumn', text: 'Name', flex: 1,
                            tpl: '<div><img src="images/avatar/avatar2.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{type}.png" style="width: 22px;"> </div>'},
                    ]
                }],
            dockedItems: [{
                    xtype: 'toolbar',
                    items: [{
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            defaults: {
                                columnWidth: .08,
                                margin: '3px',
                                checked: true,
                                listeners: {
                                    change: 'onSingCheckChange'
                                }
                            },
                            defaultType: 'checkboxfield',
                            items: [{
                                    boxLabel: 'Aries',
                                    name: 'Aries',
                                }, {
                                    boxLabel: 'Tarus',
                                    name: 'Tarus',
                                }, {
                                    boxLabel: 'Gem',
                                    name: 'Gemini',
                                }, {
                                    boxLabel: 'Cance',
                                    name: 'Cancer',
                                }, {
                                    boxLabel: 'Leo',
                                    name: 'Leo',
                                }, {
                                    boxLabel: 'Virgo',
                                    name: 'Virgo',
                                }, {
                                    boxLabel: 'Libra',
                                    name: 'Libra',
                                }, {
                                    boxLabel: 'Scorp',
                                    name: 'Scorpio',
                                }, {
                                    boxLabel: 'Sagit',
                                    name: 'Sagittarius',
                                }, {
                                    boxLabel: 'Capri',
                                    name: 'Capricon',
                                }, {
                                    boxLabel: 'Aquar',
                                    name: 'Aquarius'
                                }, {
                                    boxLabel: 'Pisc',
                                    name: 'Pisces'
                                }
                            ]
                        }
                    ]
                }],

        }, {
            xtype: 'tabpanel',
            headerPosition : 'right',
            title: 'Group Panel',
            collapsible: true,
            layout: 'column',
            defaults: {
                columnWidth: .5,
                xtype: 'panel',
                height : 200,
                collapsible: true,
               
            },
            columnWidth: .6,
            items: [{
                    title: 'Aries'
                }, {
                    title: 'Tarus'
                }, {
                    title: 'Gemini'
                }, {
                    title: 'Cancer'
                }, {
                    title: 'Leo'
                }, {
                    title: 'Virgo'
                }, {
                    title: 'Libra'
                }, {
                    title: 'Scorpio'
                }, {
                    title: 'Sagittarius'
                }, {
                    title: 'Capricon'
                }, {
                    title: 'Aquarius'
                }, {
                    title: 'Pisces'
                }]
        }]

});