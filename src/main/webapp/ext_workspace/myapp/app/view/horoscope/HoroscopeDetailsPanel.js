/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define("MyApp.view.horoscope.HoroscopeDetailsPanel", {
    extend: 'Ext.tab.Panel',
    xtype: 'horoscopeDetailsPanel',
    alias: 'widget.horoscopeDetailsPanel',
    layout: 'border',
    autoHeight: true,
    height: 640,
    autoScroll: true,
    controller: 'astroController',
    items: [{
            xtype: "component",
            title: 'Times Of India',
            autoWidth: true,
            autoHeight: true,
            autoEl: {
                tag: "iframe",
                src: "https://timesofindia.indiatimes.com/astrology/horoscope"
            }
        },{
            xtype: "component",
            title: 'Ganesha Speaks',
            autoWidth: true,
            autoHeight: true,
            autoEl: {
                tag: "iframe",
                src: "https://www.ganeshaspeaks.com/"
            }
        },{
            xtype: "component",
            title: 'Inda Today',
            autoWidth: true,
            autoHeight: true,
            autoEl: {
                tag: "iframe",
                src: "https://www.indiatoday.in/horoscopes"
            }
        }]

}
);