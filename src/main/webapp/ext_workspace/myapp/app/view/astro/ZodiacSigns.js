/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('MyApp.view.astro.ZodiacSigns', {
    extend: 'Ext.Panel',
    xtype: 'basic-pie',

    width: 450,

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    items: [{
            xtype: 'polar',
            reference: 'chart',
            captions: {
                title: 'Moon',
                credits: {
                    text: 'Fire(Ar,Leo,Sag)--Earth:(Taur,Vir,Capri)--Air:(Gem,Lib,Aqua)--Water:(Can,Scor,Pis)',
                    align: 'left'
                }
            },
            width: '100%',
            height: 500,
            insetPadding: 40,
            innerPadding: 20,
            store: Ext.create('Ext.data.Store', {

                fields: ['os', 'data1','anotherName','lord'],
                data: [
                    {os: 'Aries-Mars', data1: 8, anotherName: 'Mesham -Kujudu' },
                    {os: 'Tarus-Venus', data1: 8, anotherName: 'Vrishabham-Sukrudu'},
                    {os: 'Gemini-Mercury', data1: 8, anotherName: 'Mithunam-Budhudu'},
                    {os: 'Cancer-Moon', data1: 8, anotherName: 'Karkatakam-Chandrudu'},
                    
                    {os: 'Leo-Sun', data1: 8, anotherName: 'Simham-Suryudu'},
                    {os: 'Virgo-Mercury', data1: 8, anotherName: 'Kanya-Budhudu'},
                    {os: 'Libra-Venus', data1: 8, anotherName: 'Tula-Sukrudu'},
                    {os: 'Scorpio-Mars', data1: 8,anotherName: 'Vrischikam-Kujudu'},
                    
                    {os: 'Sagittarius-Jupiter', data1: 8, anotherName: 'Dhanus-Guru'},
                    {os: 'Capricon-Saturn', data1: 8, anotherName: 'Makaram-Sani'},
                     {os: 'Aquarius-Saturn', data1: 8, anotherName: 'Kumbam-Sani'},
                     {os: 'Pisces-Jupiter', data1: 8, anotherName: 'Meenam-Guru'}
                ]

            }),
            legend: {
                docked: 'bottom'
            },
            interactions: ['rotate'],
            series: [{
                    type: 'pie',
                    angleField: 'data1',
                    label: {
                        field: 'os',
                        calloutLine: {
                            length: 60,
                            width: 3
                                    // specifying 'color' is also possible here
                        }
                    },
                    highlight: true,
                    tooltip: {
                        trackMouse: true,
                        renderer: 'onSeriesTooltipRender'
                    }
                }]
        }]
});