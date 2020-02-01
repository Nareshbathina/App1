
Ext.define('MyApp.view.match.TeamPlayerSelectionPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'teamPlayerSelectionPanel',
    requires: ['MyApp.store.PlayerStore'],
    layout: 'fit',
    itemId: 'teamSelectionPanel',
    items: [{
            xtype: 'fieldset',
            layout: 'column',
            collapsible: false,
            border: false,
            items: [{
                    xtype: 'itemselector',
                    cls: 'teamSelector',
                    itemId: 'team1Selector',
                    columnWidth: .45,
                    height: 390,
                    store: {
                        type: 'playerStore'
                    },
                    displayField: 'name',
                    valueField: 'id',
                    fromTitle: 'Squad',
                    toTitle: 'Playing11'

                }, {
                    xtype: 'displayfield',
                    columnWidth: .1,
                }, {
                    xtype: 'itemselector',
                    cls: 'teamSelector',
                    itemId: 'team2Selector',
                    columnWidth: .45,
                    height: 390,
                    store: {
                        type: 'playerStore'
                    },
                    displayField: 'name',
                    valueField: 'id',
                    fromTitle: 'Squad',
                    toTitle: 'Playing11'

                }],

        }],
    buttons: [{
            text: 'Save',
            handler: 'onTeamPlayersSave'
        }]
});