/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',
        'Ext.calendar.panel.Panel',
        'MyApp.view.league.LeaguesPanel',
        'MyApp.view.match.MatchInfoWindow',
        'MyApp.view.astro.AstroPanel',
        'MyApp.view.horoscope.HoroscopeGrid',
        'MyApp.view.horoscope.HoroscopeDetailsPanel',
        'MyApp.view.matchDetails.MatchDetailsPanel'
    ],

    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',

    tabBarHeaderPosition: 0,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 20,
    },

    items: [{
            title: 'Home',
            iconCls: 'fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                    xtype: 'mainlist'
                }]
        }, {
            title: 'Leagues',
            iconCls: 'fa-user',
            items: [{
                    xtype: 'leaguesPanel'
                }]
        }, {
            title: 'Astro',
            iconCls: 'fa-users',
            items: [{
                    xtype: 'astroPanel'
                }]
        }, {
            title: 'Settings',
            iconCls: 'fa-cog',
            items: [{
                    xtype: 'horoscopeGrid'
                }, {
                    xtype: 'horoscopeDetailsPanel'
                }]
        }, {
            title: 'Matches',
            xtype: 'calendar',
            createButton: null,
            colors: [

            ],
            height: 400,
            width: 600,
            listener: {
                eventclick: function () {
                    debugger
                }
            },
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: 'getAllLeaguesForCal.htm'
                }
            },
            views: {
                week: null,
                month: {
                    addForm: null,
                    editForm: null,
                    listeners: {
                        eventtap: 'onEventClick' // this works
                    }
                }
            }
        },{
            title : 'Match Detail',
            xtype : 'matchDetailsPanel'
        }]
});
