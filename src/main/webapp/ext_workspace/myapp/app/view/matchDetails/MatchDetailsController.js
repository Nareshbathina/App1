
Ext.define('MyApp.view.matchDetails.MatchDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.matchDetailsController',
    init: function () {
        this.control({
            '#leagueCmb': {
                select: this.onLeagueSelect
            },
            '#matchCmb': {
                select: this.onMatchSelect
            },
        });
    },
    onLeagueSelect: function (field, record) {
        var me = this;
        var view = me.getView();
        var matchCmb = view.query('#matchCmb')[0];

        matchCmb.getStore().getProxy().setExtraParam('calendar', record.get('id'))
        matchCmb.getStore().load();
    },
    onMatchSelect: function (field, record) {
        var me = this;
        var view = me.getView();
        var matchCmb = view.query('#matchCmb')[0];
        Ext.Ajax.request({
            url: 'getMatchDetails.htm',
            params: {id: record.get('id')},
            method: 'GET',
            success: function (response, options) {
                var responseObj = Ext.decode(response.responseText);
                var data = responseObj.Data[0];
                me.loadTeamGrids(data.team1Id, data.team2Id,data.team1PlayersInfo,data.team2PlayersInfo);
            },
            failure: function (response, options) {

            }
        });

    },
    loadTeamGrids: function (team1Id, team2Id,team1Data,team2Data) {
        var me = this;
        var view = me.getView();

        var teamSelector1 = view.query('#team1PlayerAnalysis')[0];
        var team1Store = teamSelector1.getStore();
        team1Store.load({params: {teamId: team1Id}});
        var teamSelector2 = view.query('#team2PlayerAnalysis')[0];
        var team2Store = teamSelector2.getStore();
        team2Store.load({params: {teamId: team2Id}});
        Ext.defer(function () {
            if(!Ext.isEmpty(team1Data)){
                var t1Data = team1Data.split(',');
                var recordsTobeRemoved = [];
                team1Store.each(function (record,idx) {
                  if(t1Data.indexOf(record.get('id')) ==-1 ){
                      recordsTobeRemoved.push(record);
                  }else{
                      record.set('order',t1Data.indexOf(record.get('id')));
                  }
                });
                team1Store.remove(recordsTobeRemoved);
                var t2Data = team2Data.split(',');
                recordsTobeRemoved = [];
                team2Store.each(function (record,idx) {
                  if(t2Data.indexOf(record.get('id')) ==-1 ){
                      recordsTobeRemoved.push(record);
                  }else{
                      record.set('order',t2Data.indexOf(record.get('id')));
                  }
                });
                team2Store.remove(recordsTobeRemoved);
                team1Store.sort('order','ASC');
                team2Store.sort('order','ASC');
            }
            me.addTabsForPlayer();
            
        }, 700, view);

    },
    onSingCheckChange: function (field, nVal) {
        var me = this;
        var view = me.getView();
        var teamSelector = view.query('#team1PlayerAnalysis')[0];
        var teamSelector1View = teamSelector.getView();
        var rowIndexs = [];
        teamSelector.getStore().each(function (record, index) {
            if (record.get('sunsign') == field.name) {
                rowIndexs.push(index);
            }
        });
        Ext.each(rowIndexs, function (rowIndex) {
            teamSelector1View.getRow(rowIndex).style.display = nVal ? '' : 'none';
        });
        teamSelector = view.query('#team2PlayerAnalysis')[0];
        teamSelector1View = teamSelector.getView();
        rowIndexs = [];
        teamSelector.getStore().each(function (record, index) {
            if (record.get('sunsign') == field.name) {
                rowIndexs.push(index);
            }
        });
        Ext.each(rowIndexs, function (rowIndex) {
            teamSelector1View.getRow(rowIndex).style.display = nVal ? '' : 'none';
        });

    },
    addTabsForPlayer: function () {
        var me = this;
        var view = me.getView();
        var tabPanel = view.down('#mainTabPanel');
        tabPanel.items.each(function (item) {
            if (item.manual) {
                item.destroy();
            }
        });
        var teamSelector = view.query('#team1PlayerAnalysis')[0];
        teamSelector.getStore().each(function (record) {
           tabPanel.add({
                xtype: 'playerAnalysisPanel',
                manual: true,
                 playerId: record.get('id'),
                title: record.get('sName')
               
            });

        });
        teamSelector = view.query('#team2PlayerAnalysis')[0];
        teamSelector.getStore().each(function (record) {
            tabPanel.add({
                xtype: 'playerAnalysisPanel',
                manual: true,
                 playerId: record.get('id'),
                title: record.get('sName')
               
            });

        });
    },
   
});
