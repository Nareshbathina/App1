/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('MyApp.store.PlayerStore', {
    extend: 'Ext.data.Store',

    alias: 'store.playerStore',
    fields: [{name: 'id', type: 'string'},
        {name: 'fullName', type: 'string'},
        {name: 'name'},
        {name: 'sunsign', type: 'string'},
        {name: 'credits', type: 'float'},
        {name: 'points', type: 'float'},
        {name: 'teamId', type: 'string'},
        {name: 'playerType', type: 'int'},
        {name: 'b1', type: 'int'},
        {name: 'b2', type: 'int'},
        {name: 'b3', type: 'int'},
        {name: 'b4', type: 'int'}],

    autoLoad: false,
   
    sorters: [{
            property: 'playerType',
            direction: 'ASC' // or 'ASC'
        }],
    proxy: {
        type: 'ajax',
        url: 'getAllPlayersByTeamId.htm',
        reader: {
            type: 'json',
            rootProperty: 'Data',
            totalProperty: 'totalCount'
        }
    }
});
