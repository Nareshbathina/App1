/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('MyApp.view.match.TeamPlayerPointsPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'teamPlayerPointsPanel',
    requires: ['MyApp.store.PlayerStore'],
    layout: 'hbox',
    itemId: 'teamPlayerPointsPanel',
    initComponent: function () {
        var p1 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
        var p2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
        this.items = [{
                xtype: 'grid',
                flex: 1,
                itemId: 'team1PlayerPointsGrid',
                plugins: [p1],
                store: {
                    type: 'playerStore'
                },
                columns: [
                    {xtype: 'rownumberer', width: 40,locked: true},
                    {text: 'Id', dataIndex: 'id', hidden: true},
                    {xtype: 'templatecolumn', text: 'Name', flex:1,
                    tpl: '<div><img src="images/avatar/avatar1.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" title="{sunsign}"style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{type}.png" style="width: 22px;"> </div>'},
                    {text: 'D11', dataIndex: 'b1', width: 70, editor: {xtype: 'numberfield'}},
                    {text: 'T11', dataIndex: 'b2', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'PP', dataIndex: 'b3', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b4', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b5', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                ]
            }, {
                xtype: 'grid',
                flex: 1,
                itemId: 'team2PlayerPointsGrid',
                plugins: [p2],
                store: {
                    type: 'playerStore'
                },
                columns: [
                    {xtype: 'rownumberer', width: 40,locked: true},
                    {text: 'Id', dataIndex: 'id', hidden: true},
                    {xtype: 'templatecolumn', text: 'Name', flex:1,
                    tpl: '<div><img src="images/avatar/avatar2.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" title="{sunsign}"style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{type}.png" style="width: 22px;"> </div>'},
                    
                    {text: 'D11', dataIndex: 'b1', width: 70, editor: {xtype: 'numberfield'}},
                    {text: 'T11', dataIndex: 'b2', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'PP', dataIndex: 'b3', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b4', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b5', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                ]
            }]
        this.callParent(arguments);
    },

    buttons: [{
            text: 'Save',
            handler: 'onTeamPlayersPointsSave'
        }]

});



