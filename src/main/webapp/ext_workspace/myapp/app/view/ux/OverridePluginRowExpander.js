Ext.define("MyApp.view.ux.OverridePluginRowExpander", {
     alias: "plugin.overriderowexpander",
     extend: "Ext.grid.plugin.RowExpander",


     isCollapsed: function (rowIdx) {
         var me = this,
             rowNode = me.view.getNode(rowIdx),
             row = Ext.fly(rowNode, '_rowExpander');
         if(row)    
            return row.hasCls(me.rowCollapsedCls)
        else
            false
     },


     collapse: function (rowIdx) {
         if (this.isCollapsed(rowIdx) == false) {
             this.toggleRow(rowIdx, this.grid.getStore().getAt(rowIdx));
         }
     },


     collapseAll: function () {
         for (i = 0; i < this.grid.getStore().getTotalCount(); i++) {
             this.collapse(i);
         }
     },


     expand: function (rowIdx) {
         if (this.isCollapsed(rowIdx) == true) {
             this.toggleRow(rowIdx, this.grid.getStore().getAt(rowIdx));
         }
     },


     expandAll: function () {
         for (i = 0; i < this.grid.getStore().getTotalCount(); i++) {
             this.expand(i);
         }
     }

 });