
Ext.define("MyApp.view.matchDetails.SignTreePanel", {
    extend: 'Ext.tree.Panel',
    requires: ['MyApp.view.matchDetails.SignTreePanelController'],
    xtype: 'signTreePanel',
    alias: 'widget.signTreePanel',
    height: 600,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
     hideHeaders: true,
    store: {
        type: 'tree',

    },
    columns: [{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            text: 'Task',
            dataIndex: 'name',
            //iconCls:'',
            flex: 2,
            sortable: true
        }],
    listeners: {
        beforeitemexpand : 'beforeitemexpand',
         itemexpand:'onSignTreePanelExpand'
    }



});