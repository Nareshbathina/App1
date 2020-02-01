
Ext.define('MyApp.view.league.LeaguesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.leagueController',
    init: function () {
        this.control({

        });
    },
    onLeagueTeamsExpand: function (rowNode, record, expandRow, e) {
        var view = this.getView();
        var leagueTeams = view.down('leagueTeams');
        var grid = leagueTeams.down();

        if (!record.data.players) {
            Ext.Ajax.request({
                url: 'getAllPlayersByTeamId.htm',
                params: {'teamId': record.get('id')},
                method: 'GET',
                success: function (response, options) {
                    var obj = Ext.util.JSON.decode(response.responseText);
                    record.data.players = obj.Data;
                    grid.getView().refresh();
                },
                failure: function (response, options) {

                }
            });
        }
    },
    onLeagueTeamsPlayersExpand: function (rowNode, record, expandRow, e) {
        if (!record.data.brokerPlayers) {
            var ds = Ext.create('Ext.data.Store', {
                model: 'BrokerPlayer',
                proxy: {
                    type: 'ajax',
                    url: "getBrokerPlayerByPlayerId.htm",
                    reader: {
                        type: 'json',
                        rootProperty: 'Data'
                    }
                }
            });
            ds.load({
                params: {'playerId': record.get('id')}
            });
            record.data.brokerPlayers = ds;
        }
    },
    onViewTeamsClick: function (record) {
        var view = this.getView();
        var leagueTeams = view.down('leagueTeams');
        leagueTeams.setVisible(true);
        leagueTeams.items.items[0].getStore().load({
            params: {
                leagueId: record.get('id')
            }
        });
    }
});
