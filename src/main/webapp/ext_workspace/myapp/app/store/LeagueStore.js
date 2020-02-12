Ext.define('MyApp.store.LeagueStore', {
    extend: 'Ext.data.Store',

    alias: 'store.leagueStore',

    fields: [
        'id', 'name', 'code', 'iconName'
    ],
   
    autoLoad : false,
    proxy: {
        type: 'ajax',
        url: 'getAllLeagues.htm',
        reader: {
            type: 'json',
            rootProperty: 'Data',
            totalProperty: 'totalCount'
        }
    }
});
