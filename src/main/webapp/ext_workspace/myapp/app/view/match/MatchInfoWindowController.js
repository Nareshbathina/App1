Ext.define('MyApp.view.match.MatchInfoWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.matchInfoWindowController',
    init: function () {
        this.control({
            'matchInfoWindow': {
                afterrender: this.onWindowRender
            }

        });
    },
    onWindowRender: function (win) {
        var controller = this;
        var view = this.getView();
        Ext.defer(function () {
            var teamPlayerSelectionPanel = view.down('teamPlayerSelectionPanel');
            var teamSelector1 = view.query('#team1Selector')[0];
            teamSelector1.getStore().load({params: {teamId: view.team1Id}});
            var teamSelector2 = view.query('#team2Selector')[0];
            teamSelector2.getStore().load({params: {teamId: view.team2Id}});
            controller.loadSelectedPlayers(teamSelector1, teamSelector2);
        }, 300, view);


    },
    loadSelectedPlayers: function (teamSelector1, teamSelector2) {
        var controller = this;
        var view = this.getView();
        Ext.Ajax.request({
            url: 'getMatchDetails.htm',
            params: {id: view.matchId},
            method: 'GET',
            success: function (response, options) {
                var responseObj = Ext.decode(response.responseText);
                var data = responseObj.Data[0];
                teamSelector1.setValue(data.team1PlayersInfo);
                teamSelector2.setValue(data.team2PlayersInfo);
                controller.loadPlayerPoints(data, teamSelector1, teamSelector2);
            },
            failure: function (response, options) {

            }
        });
    },
    loadPlayerPoints: function (data, teamSelector1, teamSelector2) {

        var controller = this;
        var view = this.getView();
        var b1 = data.b1;
        var t1b1= b1 ? b1.split(',-,')[0] : [];
        var t2b1= b1 ? b1.split(',-,')[1] : [];
           t1b1 = t1b1 && t1b1.length> 0 ? t1b1.split(',') : []; 
           t2b1 = t2b1 && t2b1.length> 0 ? t2b1.split(',') : []; 
        var team1Grid = view.query('#team1PlayerPointsGrid')[0];
        var team2Grid = view.query('#team2PlayerPointsGrid')[0];
        var teamGrid = view.query('#matchPlayerPointsGrid')[0];
        var zodiacGrid = view.query('#playerPointsGridZodiac')[0];
        
        Ext.defer(function () {
            var team1DataItems = teamSelector1.items.items[2].getStore().data.items;
            var team1Data = [];
            for(var i=0;i<team1DataItems.length;i++){
                team1DataItems[i].data.b1= t1b1[i] && !isNaN(t1b1[i])  ? Number(t1b1[i]) : 0;
                 team1Data.push(team1DataItems[i].data);
            }
           
            team1Grid.getStore().loadData(team1Data);
            var team2DataItems = teamSelector2.items.items[2].getStore().data.items;
            var team2Data = [];
            for(var i=0;i<team2DataItems.length;i++){
               team2DataItems[i].data.b1= t2b1[i] && !isNaN(t2b1[i])  ? Number(t2b1[i]) : 0;
               team2Data.push(team2DataItems[i].data);
            }
           team2Grid.getStore().loadData(team2Data);
           var teamData = team1Data.concat(team2Data);
           teamGrid.getStore().loadData(teamData);
           zodiacGrid.getStore().loadData(teamData);
        }, 300, controller);


    },
    onTeamPlayersSave : function () {
        var me = this;
        var view = me.getView();
        var params = {
            id: view.matchId
        };
        var team1Selector = view.query('#team1Selector')[0];
        var team2Selector = view.query('#team2Selector')[0];
        params.team1PlayersInfo = team1Selector.getValue().toString();
        params.team2PlayersInfo = team2Selector.getValue().toString();
        Ext.MessageBox.confirm(
                'Confirm', 'Are you sure you want to do this ?', function callbackFunction(btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: 'saveMatch.htm',
                            params: {matchJson: Ext.encode(params)},
                            method: 'POST',
                            success: function (response, options) {
                                var responseObj = Ext.decode(response.responseText);
                                Ext.Msg.alert('success', responseObj.message);
                            },
                            failure: function (response, options) {

                            }
                        });
                    }
                });
    },
    onTeamPlayersPointsSave : function () {
        var me = this;
        var view = me.getView();
        var params = {
            matchId: view.matchId
        };
        var team1Grid = view.query('#team1PlayerPointsGrid')[0];
        var team2Grid = view.query('#team2PlayerPointsGrid')[0];
        var data = [];
        
        team1Grid.getStore().each(function(record,id){
          data.push(record.data);
      });
        team2Grid.getStore().each(function(record,id){
          data.push(record.data);
      });
       params.playersJson = Ext.encode(data);
      
        Ext.MessageBox.confirm(
                'Confirm', 'Are you sure you want to do this ?', function callbackFunction(btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: 'saveMatchPoints.htm',
                            params: params,
                            method: 'POST',
                            success: function (response, options) {
                                var responseObj = Ext.decode(response.responseText);
                                Ext.Msg.alert('success', responseObj.message);
                            },
                            failure: function (response, options) {

                            }
                        });
                    }
                });
  
    }
});