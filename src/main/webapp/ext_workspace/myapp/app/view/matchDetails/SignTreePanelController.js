


Ext.define('MyApp.view.matchDetails.SignTreePanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signTreePanelController',
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
    beforeitemexpand: function (row, record, eOpts) {
        var view = this.getView();
        if (!row.isRoot() && row.childNodes.length == 0) {
            if (row.data.planetId) {
                var mainTabPanel = view.up('analysisPanel');
                var teamSelector = mainTabPanel.query('#team1PlayerAnalysis')[0];
                var store = teamSelector.getStore();
                return (store.data.length != 0);

            }
        } else {
            return true;
        }

    },
    onSignTreePanelExpand: function (row, record, eOpts) {
        var view = this.getView();

        if (!row.isRoot() && row.childNodes.length == 0) {
            if (row.data.planetId) {
                var mainTabPanel = view.up('analysisPanel');
                var teamSelector = mainTabPanel.query('#team1PlayerAnalysis')[0];
                var store = teamSelector.getStore();
                store.each(function (record) {
                    if (record.get('sunsign') == row.data.text) {
                        row.appendChild({text: record.get('name'), name: record.get('name'), leaf: true});
                    }
                });
                teamSelector = mainTabPanel.query('#team2PlayerAnalysis')[0];
                store = teamSelector.getStore();
                store.each(function (record) {
                    if (record.get('sunsign') == row.data.text) {
                        row.appendChild({text: record.get('name'), name: record.get('name'), leaf: true});
                    }
                });
            } else {
                var planetMap = this.getPlanetInfoMap();
                planetMap.each(function (key, value, length) {
                    if (row.data.id == value.toString()) {
                        row.appendChild({planetId: value, text: key, name: key, leaf: false});
                    }
                });
            }
        }
    },
    onSignTreePanelRender: function (panel) {
        Ext.defer(function () {

            var pointsGrid = panel.down('#pointsGrid');
            var friendsTreePanel = panel.down('#friendsTree');
            var enimesTreeTreePanel = panel.down('#enimesTree');
            var equalTreeTreePanel = panel.down('#equalTree');
            var frnode = friendsTreePanel.getStore().getRootNode();
            var ernode = enimesTreeTreePanel.getStore().getRootNode();
            var eqrnode = equalTreeTreePanel.getStore().getRootNode();
            frnode.removeAll();
            ernode.removeAll();
            eqrnode.removeAll();
            Ext.Ajax.request({
                url: 'getZsignsData.htm',
                params: {'id': panel.signId},
                method: 'GET',
                success: function (response, options) {
                    var obj = Ext.util.JSON.decode(response.responseText);
                    var data = obj.Data[0];
                    var friends = data.friends;
                    Ext.each(friends, function (f) {
                        f.text = f.name;
                        f.leaf = false;
                        f.collapse = true;
                        frnode.appendChild(f);
                    });
                    frnode.childNodes = friends;
                    var enimes = data.enimes;
                    Ext.each(enimes, function (f) {
                        f.text = f.name;
                        f.leaf = false;
                        f.collapse = true;
                        ernode.appendChild(f);
                    });
                    ernode.childNodes = enimes;
                    var equal = data.equal;
                    Ext.each(equal, function (f) {
                        f.text = f.name;
                        f.leaf = false;
                        f.collapse = true;
                        eqrnode.appendChild(f);
                    });
                    eqrnode.childNodes = equal;
                    var gridData = [];
                    gridData.push({name: 'Aries', points: data.aries});
                    gridData.push({name: 'Tarus', points: data.tarus});
                    gridData.push({name: 'Gemini', points: data.gemini});
                    gridData.push({name: 'Cancer', points: data.cancer});
                    gridData.push({name: 'Leo', points: data.leo});
                    gridData.push({name: 'Virgo', points: data.virgo});
                    gridData.push({name: 'Libra', points: data.libra});
                    gridData.push({name: 'Scorpio', points: data.scorpio});
                    gridData.push({name: 'Sagittarius', points: data.sagittarius});
                    gridData.push({name: 'Capricon', points: data.capricorn});
                    gridData.push({name: 'Aquarius', points: data.aquarius});
                    gridData.push({name: 'Pisces', points: data.pisces});
                    pointsGrid.getStore().loadData(gridData);
                },
                failure: function (response, options) {

                }
            });
        }, 500);
    }
});
