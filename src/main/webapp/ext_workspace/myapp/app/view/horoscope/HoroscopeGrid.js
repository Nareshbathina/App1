Ext.define('MyApp.view.horoscope.HoroscopeGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'horoscopeGrid',
    requires: [
        'MyApp.store.HoroscopeStore'
    ],

    autoWidth: true,
    autoHeight: true,
    minHeight: 180,
    store: {
        type: 'horoscopeStore'
    },
    selModel: 'rowmodel',
    plugins: {
		ptype: 'rowediting',
                pluginId : 'horoscopeEditPlugin',
                clicksToEdit: 2,
		listeners: {
			edit: 'addHoroscope'
                }
			
	},
   
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            itemId: 'filtersToolBar',
            items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Date',
                    format: 'd/m/Y',
                    labelWidth: 150,
                    width: 330,
                    listeners: {
                        change: function (field, newValue) {
                            var grid = field.up('grid');
                            grid.getStore().load({
                                params: {
                                    date: field.getRawValue()
                                }
                            });
                        }
                    }

                }, '->', {
                    xtype: 'button',
                    text: 'Add Horoscope',
                    tooltip: 'Add horoscope',
                    handler: function () {
                        var grid = this.up('grid');
                        var datefield = grid.down('datefield');
                        if(Ext.isEmpty(datefield.getValue())){
                            Ext.Msg.alert('warning','Please select date to save');
                            return false;
                        }
                       	var store = grid.getStore();
                        if(store.data.length == 0){
                            var record = store.getModel().create();
                            store.insert(1, record);
                            var rowediting = grid.getPlugin('horoscopeEditPlugin');
                            record.set('id',-1);
                            rowediting.startEdit(record, 0);
                        }
                    }
                }]
      }],
      initComponent: function () {
          
          var editor = {xtype: 'combo',value:'Good',allowBlank: false,store:['Good','Average','Bad','Worst','Dont know','Struggle','Hard work']};
          var  columns = [
        {text: 'Aries', dataIndex: 'aries',editor: editor, flex: 1},
        {text: 'Tarus', dataIndex: 'tarus',editor: editor,  flex: 1},
        {text: 'Gemini', dataIndex: 'gemini',editor: editor,  flex: 1},
        {text: 'Cancer', dataIndex: 'cancer',editor: editor,  flex: 1},
        {text: 'Leo', dataIndex: 'leo',editor: editor,  flex: 1},
        {text: 'Virgo', dataIndex: 'virgo',editor: editor,  flex: 1},
        {text: 'Libra', dataIndex: 'libra',editor: editor,  flex: 1},
        {text: 'Scorpio', dataIndex: 'scorpio',editor: editor,  flex: 1},
        {text: 'Sagittarius', dataIndex: 'sagittarius',editor: editor,  flex: 1},
        {text: 'Capricon', dataIndex: 'capricorn',editor: editor,  flex: 1},
        {text: 'Aquarius', dataIndex: 'aquarius',editor: editor,  flex: 1},
        {text: 'Pisces', dataIndex: 'pisces',editor: editor,  flex: 1}

    ];
        Ext.apply(this, {
            columns: columns
        });
        this.callParent(arguments); //added this to not break inheritance
    },
});
