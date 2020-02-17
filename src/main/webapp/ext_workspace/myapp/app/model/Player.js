Ext.define('MyApp.model.Player', {
    extend: 'MyApp.model.Base',
    fields: [{
        name: 'teamId',
        reference: 'MyApp.model.Team'
    }, {
        name: 'productCode'
    }, {
        name: 'quantity',
        type: 'number'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'shipped',
        type: 'boolean'
    },{
        name : 'order',
        type : 'int'
    }]
});
