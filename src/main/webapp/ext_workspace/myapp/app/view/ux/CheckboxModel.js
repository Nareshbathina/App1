/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.ux.CheckboxModel', {
    override: 'Ext.selection.CheckboxModel',

    getHeaderConfig: function() {
        return Ext.apply(this.callParent(arguments), {
            width: 36,
            header: this.text
        });
    }
});
