Ext.define('MyApp.model.BrokerPlayer', {
    extend: 'MyApp.model.Base',
    fields: [{
        name: 'playerId',
        reference: 'MyApp.model.Player'
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
    }]
});
