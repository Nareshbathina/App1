

Ext.define('MyApp.view.matchDetails.PlayerAnalysisPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.playerAnalysisPanelController',
    init: function () {
        this.control({

        });
    },
    getPlanetInfoMap: function () {
        if (!this.planetMap) {
            var map = new Ext.util.HashMap();
            map.add('Aries', 3);
            map.add('Tarus', 6);
            map.add('Gemini', 4);
            map.add('Cancer', 2);
            map.add('Leo', 1);
            map.add('Virgo', 4);
            map.add('Libra', 6);
            map.add('Scorpio', 3);
            map.add('Sagittarius', 5);
            map.add('Capricon', 7);
            map.add('Aquarius', 7);
            map.add('Pisces', 5);
            this.planetMap = map;
        }
        return this.planetMap;
    },
    onPlayerAnalysisPanelRender: function (panel) {
        var playerId = panel.playerId;
        var mainTabPanel = panel.up('tabpanel');
        var teamSelector = mainTabPanel.query('#team1PlayerAnalysis')[0];
        var store = teamSelector.getStore();
        var index = store.find('id', playerId);
        var record = null;
        if (index == -1) {
           var teamSelector2 = mainTabPanel.query('#team2PlayerAnalysis')[0];
           var store2 = teamSelector2.getStore();
           var idx = store2.find('id', playerId);
           record = store2.getAt(idx);
        }else{
            record = store.getAt(index);
        }
        var data = record.data;
        var signPoints = data.signPoints;
        var d = [];
        var planetDetails = Ext.ComponentQuery.query('#planetDetails')[0];
        var planetInfoGrid = planetDetails.query('grid')[0];
        var planetPoints = planetDetails.query('grid')[1];
        var planetMap = this.getPlanetInfoMap();
        var planetInfoId = planetMap.get(data.sunsign);
        var planetInfoIdx = planetInfoGrid.getStore().find('id', planetInfoId);
        var planetInfoRecord = planetInfoGrid.getStore().getAt(planetInfoIdx);
        Ext.apply(data, planetInfoRecord.data);
        d.push(data);
        panel.down('dataview').getStore().loadData(d);



        this.loadGrids(data.sunsignId,signPoints);


    },
    loadGrids: function (signId,signPoints) {
        var view = this.getView();
        var playerSignPoints = signPoints.split(',');
        var planetMap = this.getPlanetInfoMap();
        var friendsGrid = view.down('#friendsGrid');
        var enimiesGrid = view.down('#enimiesGrid');
        var equalGrid = view.down('#equalGrid');
        var othersGrid = view.down('#othersGrid');
        Ext.Ajax.request({
            url: 'getZsignsData.htm',
            params: {'id': signId},
            method: 'GET',
            success: function (response, options) {
                var obj = Ext.util.JSON.decode(response.responseText);
                var data = obj.Data[0];
                var friends = data.friends;
                var enimes = data.enimes;
                var equal = data.equal;
                var fIds = [], enIds = [], eqIds = [];
              
                Ext.each(friends, function (f) {
                    planetMap.each(function (key, value, length) {
                        if (f.id == value.toString()) {
                            f.planetId = value;
                            fIds.push(key.toString());
                        }
                    });
                });
                Ext.each(enimes, function (f) {
                    planetMap.each(function (key, value, length) {
                        if (f.id == value.toString()) {
                            f.planetId = value;
                            enIds.push(key.toString());
                        }
                    });
                });
                Ext.each(equal, function (f) {
                    planetMap.each(function (key, value, length) {
                        if (f.id == value.toString()) {
                            f.planetId = value;
                            eqIds.push(key.toString());
                        }
                    });
                });
                var friendRecords = [], enemyRecords = [], equalRecords = [], otherRecords =[];
                var mainTabPanel = view.up('#mainTabPanel');
                var teamSelector = mainTabPanel.query('#team1PlayerAnalysis')[0];
                var store = teamSelector.getStore();
                store.each(function (record) {
                    record.set('fpoints',playerSignPoints[record.get('sunsignId')-1]);
                    if (fIds.indexOf(record.get('sunsign')) > -1) {
                        friendRecords.push(record.data);
                    }else if (enIds.indexOf(record.get('sunsign')) > -1) {
                        enemyRecords.push(record.data);
                    }else if (eqIds.indexOf(record.get('sunsign')) > -1) {
                        equalRecords.push(record.data);
                    }else if(record.get('sunsignId') == signId){
                        equalRecords.push(record.data);
                    }else{
                        otherRecords.push(record.data);
                    }
                });
                teamSelector = mainTabPanel.query('#team2PlayerAnalysis')[0];
                store = teamSelector.getStore();
                store.each(function (record) {
                    record.set('fpoints',playerSignPoints[record.get('sunsignId')-1]);
                     if (fIds.indexOf(record.get('sunsign')) > -1) {
                        friendRecords.push(record.data);
                    }else if (enIds.indexOf(record.get('sunsign')) > -1) {
                        enemyRecords.push(record.data);
                    }else if (eqIds.indexOf(record.get('sunsign')) > -1) {
                        equalRecords.push(record.data);
                    }else if(record.get('sunsignId') == signId){
                        equalRecords.push(record.data);
                    }else{
                        otherRecords.push(record.data);
                    }
                });
              
                friendsGrid.getStore().loadData(friendRecords);
                enimiesGrid.getStore().loadData(enemyRecords);
                equalGrid.getStore().loadData(equalRecords);
                othersGrid.getStore().loadData(otherRecords);
            },
            failure: function (response, options) {

            }
        });

    }
});
