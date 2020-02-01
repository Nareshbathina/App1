/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('MyApp.view.match.MatchInfoWindow', {
    extend: 'Ext.window.Window',
    xtype: 'matchInfoWindow',
    requires: [
        'MyApp.view.match.MatchInfoWindowController',
        'MyApp.view.match.TeamPlayerSelectionPanel',
        'MyApp.view.match.TeamPlayerPointsPanel',
        'MyApp.view.match.MatchPlayerPointsPanel'
    ],
    autoHeight: true,
    itemId: 'matchInfoWindow',
    controller: 'matchInfoWindowController',
    autoScroll: true,
    height: 700,
    width: 1000,
    layout: 'fit',
    items: [{
            xtype: 'panel',
            defaults: {
                // applied to each contained panel
                bodyStyle: 'padding:15px'
            },
            layout: {
                // layout-specific configs go here
                type: 'accordion',
                titleCollapse: false,
                animate: true,
            },
            items: [{
                    title: 'Team Selection',
                    xtype: 'teamPlayerSelectionPanel'
                }, {
                    title: 'Player Points',
                    xtype: 'teamPlayerPointsPanel'
                }, {
                    title: 'Match Player Points',
                    xtype: 'matchPlayerPointsPanel'
                }, {
                    title: 'Match Info ',
                    items: [{
                            xtype: 'image',
                            src: 'images/zodiac/moon-sign-zodiac.jpg',
                             height: 264,
                             width: 264,
                            flex: 1
                        },
                        {
                            xtype: 'panel',
                            flex: 2,
                            html: 'Sencha Inc.<br/>1700 Seaport Boulevard Suite 120, Redwood City, CA'
                        }]
                }]
        }]

});
