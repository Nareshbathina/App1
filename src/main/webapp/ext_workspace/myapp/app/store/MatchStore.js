Ext.define('MyApp.store.MatchStore', {
    extend: 'Ext.data.Store',
    alias: 'store.matchStore',
    fields: [
        'id', 'name', 'description', 'title'
    ],
    autoLoad: false,
    proxy: {
        type: 'ajax',
        url: 'getAllMatchesForLeague.htm'

    }
});