
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
                me.loadTeamGrids(data.team1Id, data.team2Id);
            },
            failure: function (response, options) {

            }
        });

    },
    loadTeamGrids: function (team1Id, team2Id) {
        var me = this;
        var view = me.getView();

        var teamSelector1 = view.query('#team1PlayerAnalysis')[0];
        teamSelector1.getStore().load({params: {teamId: team1Id}});
        var teamSelector2 = view.query('#team2PlayerAnalysis')[0];
        teamSelector2.getStore().load({params: {teamId: team2Id}});
        Ext.defer(function () {
            me.addTabsForPlayer();
        }, 500, view);

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
    }
});
