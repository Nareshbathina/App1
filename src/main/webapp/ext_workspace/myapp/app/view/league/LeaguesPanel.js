Ext.define("MyApp.view.league.LeaguesPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.ux.uxImg', 'MyApp.view.league.LeaguesController', 
        'MyApp.view.league.LeagueTeams',
        'MyApp.store.LeagueStore'],
    xtype: 'leaguePanels',
    alias: 'widget.leaguesPanel',
    layout: 'column',
    autoHeight: true,
    autoScroll: true,
    cls: 'league_panel',
    margin: '20px 10px',
    controller: 'leagueController',
    initComponent: function () {
        Ext.apply(this, {
            items: this.buildItems()
        });
        this.callParent(arguments); //added this to not break inheritance
    },
    buildItems: function () {
        return [{
                xtype: 'panel',
                columnWidth: .4,
                margin: '20px 10px',
                autoHeight: true,
                autoScroll: true,
                layout: 'fit',
                items: [{
                        xtype: 'dataview',
                        store: Ext.create('MyApp.store.LeagueStore', {
                            autoLoad: true
                        }),
                        tpl: Ext.create('Ext.XTemplate', '<div style="display: inline;"><tpl for="."><div class="listview" style="display: inline-block; width: 210px;"><img src="images//leagues//ipl.png" alt="{code}" style="height:25%">' +
                                '<h1>{code}</h1>' +
                                '<p class="title">{name}</p>' +
                                '<p>{country}</p>' +
                                '<p><button>View Teams</button></p>' +
                                '</div></tpl></div>'),

                        itemSelector: 'div.listview',
                        trackOver: true,
                        listeners: {
                            'itemclick': function (view, record, item, idx, event, opts) {
                               if (event.target.nodeName === 'BUTTON') {
                                   view.up('leaguesPanel').getController().onViewTeamsClick(record);
                                }

                            }
                        }
                    }]

            },{
                xtype : 'leagueTeams',
                hidden : true,
                columnWidth: .6,
            }

        ]
    },
    listeners: {
        afterrender: function (view) {
            Ext.defer(function () {
               
                   // this.items.items[0].refresh();
            }, 600, view);
        }
    }

});