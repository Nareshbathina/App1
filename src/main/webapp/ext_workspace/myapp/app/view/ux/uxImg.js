/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.ux.uxImg', {
    extend: 'Ext.Img',
    xtype: 'ux-img',

    onRender: function () {
        this.callParent(arguments);

        this.imgEl.on('click', this.onClick, this);
        Ext.create('Ext.tip.ToolTip', {
            target: this.getEl(),
            html: this.tooltip
        });
    },

    onClick: function (e, t) {
        this.fireEvent('click', this, e, t);
    }
});
