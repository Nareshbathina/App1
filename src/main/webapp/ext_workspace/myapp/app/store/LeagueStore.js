Ext.define('MyApp.store.LeagueStore', {
    extend: 'Ext.data.Store',

    alias: 'store.leagueStore',

    fields: [
        'id', 'name', 'code', 'iconName'
    ],
   /* data:[{
            id:"1",
            name:"Inidan Premier League 2019",
            code: 'IPL',
            iconName : 'ipl.png'
    },{
            id:"2",
            name:"World Cup ",
            code: 'cwc',
            iconName : 'worldCup.png'
    },{
            id:"41",
            name:"Inidan Premier League 2019",
            code: 'IPL',
            iconName : 'ipl.png'
    },{
            id:"24",
            name:"World Cup ",
            code: 'cwc',
            iconName : 'worldCup.png'
    },{
            id:"12",
            name:"Inidan Premier League 2019",
            code: 'IPL',
            iconName : 'ipl.png'
    },{
            id:"22",
            name:"World Cup ",
            code: 'cwc',
            iconName : 'worldCup.png'
    },{
            id:"11",
            name:"Inidan Premier League 2019",
            code: 'IPL',
            iconName : 'ipl.png'
    },{
            id:"12",
            name:"World Cup ",
            code: 'cwc',
            iconName : 'worldCup.png'
    }],*/
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
