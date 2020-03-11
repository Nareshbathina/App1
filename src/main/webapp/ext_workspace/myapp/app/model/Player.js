Ext.define('MyApp.model.Player', {
    extend: 'MyApp.model.Base',
    fields: [ {
        name: 'productCode'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'dayPoints',
        type: 'number'
    },{
        name : 'order',
        type : 'int'
    }]
});
