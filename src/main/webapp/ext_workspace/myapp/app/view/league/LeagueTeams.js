
Ext.define('MyApp.view.league.LeagueTeams', {
    extend: 'Ext.panel.Panel',
    xtype: 'leagueTeams',
    requires: [
        'MyApp.model.Team', 'MyApp.model.Player','MyApp.model.BrokerPlayer'
    ],
    autoHeight: true,
    autoScroll: true,
    items: [{
            xtype: 'grid',
            itemId: 'leagueTeamsGrid',
            store: {
                model: 'MyApp.model.Team',
                autoLoad: false,
                proxy: {
                    type: 'ajax',
                    url: 'getAllTeamsForLeague.htm',
                    reader: {
                        type: 'json',
                        rootProperty: 'Data',
                        totalProperty: 'totalCount'
                    }
                }
            },
            columns: [{
                    text: 'Id',
                    dataIndex: 'id',
                    hidden: true
                }, {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 1
                }, {
                    text: 'Code',
                    flex: 1,
                    dataIndex: 'code'
                }],
            plugins: [{
                    ptype: 'rowwidget',
                    widget: {
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'stretch'
                        },
                        bind: {
                            data: '{record}'
                        },
                        items: [{
                                flex: 1,
                                xtype: 'grid',
                                autoScroll: true,
                                height: 300,
                                bind: {
                                    store: '{record.players}'
                                },
                                columns: [{
                                        text: 'Name',
                                        dataIndex: 'name',
                                        flex: 1
                                    }, {
                                        text: 'S Name',
                                        dataIndex: 'sName',
                                        flex: 1
                                    }, {
                                        text: 'Type',
                                        dataIndex: 'type',
                                        flex: 1
                                    }],
                                plugins: [{
                                        ptype: 'rowwidget',
                                        widget: {
                                            xtype: 'container',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'stretch'
                                            },
                                            bind: {
                                                data: '{record}'
                                            },
                                            items: [{
                                                    flex: 1,
                                                    xtype: 'grid',
                                                    autoScroll: true,
                                                    height: 100,
                                                    bind: {
                                                        store: '{record.brokerPlayers}'
                                                    },
                                                    columns: [{
                                                            text: 'Credits',
                                                            dataIndex: 'credits',
                                                            flex: 1
                                                        }, {
                                                            text: 'Points',
                                                            dataIndex: 'points',
                                                            flex: 1
                                                        }, {
                                                            text: 'Type',
                                                            dataIndex: 'type',
                                                            flex: 1
                                                        }]
                                                }]

                                        }
                                    }],
                                viewConfig: {
                                    listeners: {
                                        expandbody: 'onLeagueTeamsPlayersExpand'
                                    }
                                }
                            }]

                    }
                }],
            viewConfig: {
                listeners: {
                    expandbody: 'onLeagueTeamsExpand',
                    collapsebody: function () {
                        console.log('Main Grid Collapse Body')
                    },
                }
            }
        }]

});
