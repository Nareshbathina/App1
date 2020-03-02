Ext.define('MyApp.view.match.MatchPlayerPointsPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'matchPlayerPointsPanel',
    requires: ['MyApp.store.PlayerStore'],
    layout: 'hbox',
    height: 450,
    itemId: 'matchPlayerPointsPanel',
    initComponent: function () {

        this.items = [{
                xtype: 'grid',
                autoHeight: true,
                height: 400,
                autoScroll: true,
                flex: 1,
                itemId: 'matchPlayerPointsGrid',
                store: {
                    type: 'playerStore'
                },
                columns: [
                    {xtype: 'rownumberer', width: 40, locked: true},
                    {text: 'Id', dataIndex: 'id', hidden: true},
                    {xtype: 'templatecolumn', text: 'Name', flex: 1,
                        tpl: '<div><img src="images/avatar/avatar1.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" title="{sunsign}" style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{type}.png" style="width: 22px;"> </div>'},
                    {text: 'D11', dataIndex: 'b1', width: 70, editor: {xtype: 'numberfield'}},
                    {text: 'T11', dataIndex: 'b2', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'PP', dataIndex: 'b3', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b4', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b5', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                ]
            }, {
                xtype: 'grid',
                autoHeight: true,
                height: 400,
                autoScroll: true,
                flex: 1,
                itemId: 'playerPointsGridZodiac',
                features: [{
                        ftype: 'grouping',
                        groupHeaderTpl: ' {[values.children[0].data["sunsign"]]} ',
                        
                        hideGroupedHeader: false,
                        startCollapsed: false
                    }],
                store: {
                    type: 'playerStore',
                     groupField: 'sunsign'
                },
                columns: [
                    {text: 'Id', dataIndex: 'id', hidden: true},
                   {text: 'sunsign', dataIndex: 'sunsign',hidden: true},
                    {xtype: 'templatecolumn', text: 'Name', flex: 1,
                        tpl: '<div><img src="images/avatar/avatar1.png" title="{name}" style="width: 20px;"><span style="position: absolute;">{name}</span><span style="float: right;"><img src="images/zodiac/{sunsign}.jpg" title="{sunsign}" style="width: 22px;"></span><span style="float: right;color: red;margin-right:5px">L - {capacity}</span><span style="float: right;"><img src="images/cricket/{type}.png" style="width: 22px;"> </div>'},
                    {text: 'D11', dataIndex: 'b1', width: 70, editor: {xtype: 'numberfield'}},
                    {text: 'T11', dataIndex: 'b2', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'PP', dataIndex: 'b3', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b4', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                    {text: 'xxx', dataIndex: 'b5', width: 70, editor: {xtype: 'numberfield'}, hidden: true},
                ]
            }]
        this.callParent(arguments);
    }

});