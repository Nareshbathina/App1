Ext.define("MyApp.view.astro.AstroPanel", {
    extend: 'Ext.panel.Panel',
    requires: ['MyApp.view.astro.ZodiacSigns', 'MyApp.view.astro.AstroController',
        'MyApp.view.astro.PlanetDetails'],
    xtype: 'astroPanel',
    alias: 'widget.astroPanel',
    layout: 'border',
    autoHeight: true,
    height: 800,
    autoScroll: true,
    controller: 'astroController',
    items: [{
            xtype: 'panel',
            collapsible: true,
            autoHeight: true,
            autoScroll: true,
            region: 'east',
            layout: 'fit',
            items: [{
                    xtype: 'basic-pie'
                }]

        }, {
            xtype: 'planetDetails',
            region: 'center'
        }, {
            xtype: 'panel',
            collapsible: true,
            hidden: true,
            layout: 'column',
            region: 'north',
            items: [{
                    xtype: 'image',
                    src: 'images/zodiac/planet.jpg',
                    height: 264,
                    columnWidth: .6
                }]
        }, {
            xtype: 'tabpanel',
            title : 'Positions',
            collapsible: true,
            autoWidth: true,
            layout : 'fit',
            autoHeight: true,
            split: true,
            region: 'west',
            items: [{
                    xtype: "component",
                    title : 'Sun',
                    autoWidth: true,
                    autoHeight: true,
                    autoEl: {
                        tag: "iframe",
                        src: "https://www.theplanetstoday.com/geocentric_orrery.html"
                    }
                },{
                    xtype: "component",
                    title : 'Moon',
                    autoWidth: true,
                    autoHeight: true,
                    autoEl: {
                        tag: "iframe",
                        src: "https://mooncalendar.astro-seek.com/"
                    }
                },{
                     xtype: "component",
                    title : 'Cric Pick',
                    autoWidth: true,
                    autoHeight: true,
                    autoEl: {
                        tag: "iframe",
                        src: " https://cricpick.in/"
                    }
                   
                }]
        }

    ]

}
);