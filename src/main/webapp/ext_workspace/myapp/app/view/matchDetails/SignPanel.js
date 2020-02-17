/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



Ext.define("MyApp.view.matchDetails.SignPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.matchDetails.SignTreePanel'],
    xtype: 'signPanel',
    alias: 'widget.signPanel',
    controller: 'signTreePanelController',
    layout: 'column',
    defaults: {
        margin: '5px',
                    columnWidth: .25,
                    
    },
    items: [{
            title : 'Friends',
            xtype: 'signTreePanel',
            itemId: 'friendsTree'
        }, {
            
            title : 'Enimes',
            xtype: 'signTreePanel',
            itemId: 'enimesTree'
        }, {
           
           title : 'equal',
            xtype: 'signTreePanel',
             itemId: 'equalTree'
        },{
            xtype : 'grid',
            itemId : 'pointsGrid',
             store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'points'],
                    data:[]
                }),
                 columns: [
                    {text: 'Name', dataIndex: 'name', flex: 2},
                    {text: 'Points', dataIndex: 'points', flex: 1},
                    

                ]
        }],
    listeners: {
        afterrender: 'onSignTreePanelRender'
    }

});