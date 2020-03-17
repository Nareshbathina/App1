

Ext.define("MyApp.view.main.MiscellaneousPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.main.MiscellaneousController'],
    xtype: 'miscellaneousPanel',
    alias: 'widget.miscellaneousPanel',
    controller : 'miscellaneousController',
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                    xtype: 'button',
                    text: "Player Process",
                    handler  : "onPlayerProcess"
                }] // items
        }],
    items: [{
            xtype: 'form',
            itemId : 'playerProcessPanel',
            hidden : true,
            defaults : {
                margin : '5px',
                columnWidth : .25,
                labelAlign : 'top'
            },
            layout: 'column',
            items: [{
                    xtype : 'displayfield',
                    value : 'dob should be Feb 24, 1987!Nov 22, 1970!'
            },{
                    xtype: 'textarea',
                    hidden : true,
                    name: 'name',
                    fieldLabel: 'Names'
                },{
                    xtype: 'textarea',
                    name: 'dob',
                    fieldLabel: 'DOBs'
                },{
                    xtype: 'textarea',
                    name: 'signs',
                    fieldLabel: 'Signs'
                },{
                    xtype: 'textarea',
                    name: 'uuids',
                    fieldLabel: 'UUIDS'
                }],
            buttons :[{
                   text : 'Parse DOBs',
                   handler:'onParseDOB'
            },{
                   text : 'Generate UUIDS',
                   handler:'onGenerateUUID'
            },{
                   text : 'Reset',
                   handler:'onReset'
            }]
        }],

});