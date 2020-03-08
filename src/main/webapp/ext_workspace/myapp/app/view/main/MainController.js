/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onEventClick : function(view,obj){
        var data = obj.event.data;
        var titleData =data.title.split("-");
        var title = titleData[1]+ " vs "+ titleData[2];
        Ext.create('MyApp.view.match.MatchInfoWindow',{
            title : title,
            matchId : data.id,
            team1Id : data.team1Id,
            team2Id: data.team2Id
        }).show();
    },
    addHoroscope : function (editor, ctx, eOpts) {
        var record = ctx.record;
        var params = record.data;
        var grid = editor.grid;
        var datefield = grid.down('datefield');
        if(Ext.isEmpty(datefield.getValue())){
            Ext.Msg.alert('warning','Please select date to save');
            return false;
        }
        params.date = datefield.getRawValue();
     
        params.moonType=-1;
        params.sourceLink1="";
        params.sourceLink2="";
        params.sourceLink3="";
        Ext.Ajax.request({
                url: 'saveHoroscope.htm',
                params: {horoscopeJson :Ext.encode(params)},
                success: function (response, options) {
                    grid.getStore().load({
                                params: {
                                    date: datefield.getRawValue()
                                }
                            });
                    grid.getView().refresh();
                },
                failure: function (response, options) {

                }
            });
    }
});
