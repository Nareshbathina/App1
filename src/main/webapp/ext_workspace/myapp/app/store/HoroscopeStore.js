Ext.define('MyApp.store.HoroscopeStore', {
    extend: 'Ext.data.Store',

    alias: 'store.horoscopeStore',
    autoLoad : false,
    fields: [
        'id','aries','tarus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces','moonPlace','sunPlace','jupiterPlace','venusPlace','marsPlace','saturnPlace','mercuryPlace','moonType'
    ],
    proxy: {
        type: 'ajax',
        url : 'getAllHoroscopesByDate.htm',
        reader: {
            type: 'json',
            rootProperty: 'Data',
            totalProperty: 'totalCount'
        }
    }
});
