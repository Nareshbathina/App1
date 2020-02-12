/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('MyApp.view.astro.PlanetDetails', {
    extend: 'Ext.panel.Panel',
    xtype: 'planetDetails',
    itemId: 'planetDetails',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent: function () {
        this.items = [{
                xtype: 'grid',
                flex: 2,
                store: Ext.create('Ext.data.Store', {
                    fields: ['graha', 'friends', 'enemies'],
                    data: [{id :1 ,graha: 'Ravi-Sun', friends: 'Moon, Mars, Jupiter', equals: 'Mercury', enemies: 'Venus, Saturn, Rahu'},
                        {id :2 ,graha: 'Chandra-Moon', friends: 'Sun Mercury', equals: 'Mars, Jupiter, Venus, Saturn', enemies: 'Rahu'},
                        {id :3 ,graha: 'Kuja-Mars', friends: 'Sun, Moon, Jupiter', equals: 'Venus, Saturn', enemies: 'Mercury, Rahu'},
                        {id :4 ,graha: 'Budha-Mercury', friends: 'Sun Venus, Rahu ', equals: 'Mars, Jupiter, Saturn', enemies: 'Moon'},
                        {id :5 ,graha: 'Guru-Jupiter', friends: 'Sun, Moon, Mars', equals: 'Saturn Rahu', enemies: 'Mercury, Venus'},
                        {id :6 ,graha: 'Sukra-Venus', friends: 'Mercury, Saturn Rahu', equals: 'Jupiter, Mars', enemies: 'Sun, Moon'},
                        {id :7 ,graha: 'Sani-Saturn', friends: 'Mercury Venus, Rahu', equals: 'Jupiter', enemies: 'Sun, Moon, Mars'},
                        {id :8 ,graha: 'Rahu-Dragons Head', friends: 'Mercury Venus,Saturn', equals: 'Jupiter', enemies: 'Sun, Moon, Mars'},
                        {id :9 ,graha: 'Ketu-Dragons Tail', friends: 'Mercury, Venus, Saturn, Rahu', equals: 'Jupiter', enemies: 'Sun, Moon, Mars'}]
                }),
                columns: [
                    {text: 'Graha', dataIndex: 'graha', flex: 1},
                    {text: 'Friends', dataIndex: 'friends', flex: 2},
                    {text: 'Equal', dataIndex: 'equals', flex: 1},
                    {text: 'Enemies', dataIndex: 'enemies', flex: 2}
                ]
            },{
                xtype :'splitter'
            }, {
                xtype: 'grid',
                flex: 3,
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'aries', 'tarus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricon', 'aquarius', 'pisces'],
                    data: [{id :1 ,'name': 'Aries', 'aries': '3', 'tarus': '6', 'gemini': '6', 'cancer': '2', 'leo': '7', 'virgo': '6', 'libra': '4', 'scorpio': '6', 'sagittarius': '9', 'capricon': '6', 'aquarius': '6', 'pisces': '4'},
                        {id :2 ,'name': 'Tarus', 'aries': '7', 'tarus': '2', 'gemini': '4', 'cancer': '8', 'leo': '6', 'virgo': '10', 'libra': '7', 'scorpio': '6', 'sagittarius': '3', 'capricon': '9', 'aquarius': '3', 'pisces': '7'},
                        {id :3 ,'name': 'Gemini', 'aries': '8', 'tarus': '4', 'gemini': '2', 'cancer': '4', 'leo': '8', 'virgo': '6', 'libra': '10', 'scorpio': '4', 'sagittarius': '7', 'capricon': '4', 'aquarius': '9', 'pisces': '6'},
                        {id :4 ,'name': 'Cancer', 'aries': '3', 'tarus': '8', 'gemini': '4', 'cancer': '5', 'leo': '7', 'virgo': '8', 'libra': '5', 'scorpio': '8', 'sagittarius': '4', 'capricon': '8', 'aquarius': '4', 'pisces': '10'},
                        {id :5 ,'name': 'Leo', 'aries': '9', 'tarus': '6', 'gemini': '8', 'cancer': '7', 'leo': '1', 'virgo': '5', 'libra': '7', 'scorpio': '4', 'sagittarius': '10', 'capricon': '5', 'aquarius': '7', 'pisces': '6'},
                        {id :6 ,'name': 'Virgo', 'aries': '6', 'tarus': '10', 'gemini': '6', 'cancer': '8', 'leo': '5', 'virgo': '1', 'libra': '6', 'scorpio': '7', 'sagittarius': '5', 'capricon': '9', 'aquarius': '7', 'pisces': '4'},
                        {id :7 ,'name': 'Libra', 'aries': '4', 'tarus': '7', 'gemini': '10', 'cancer': '5', 'leo': '7', 'virgo': '6', 'libra': '2', 'scorpio': '6', 'sagittarius': '7', 'capricon': '4', 'aquarius': '9', 'pisces': '6'},
                        {id :8 ,'name': 'Scorpio', 'aries': '6', 'tarus': '6', 'gemini': '4', 'cancer': '8', 'leo': '4', 'virgo': '7', 'libra': '6', 'scorpio': '2', 'sagittarius': '4', 'capricon': '7', 'aquarius': '3', 'pisces': '10'},
                        {id :9 ,'name': 'Sagittarius', 'aries': '9', 'tarus': '3', 'gemini': '7', 'cancer': '4', 'leo': '10', 'virgo': '5', 'libra': '7', 'scorpio': '4', 'sagittarius': '3', 'capricon': '5', 'aquarius': '8', 'pisces': '4'},
                        {id :10 ,'name': 'Capricon', 'aries': '6', 'tarus': '9', 'gemini': '4', 'cancer': '8', 'leo': '5', 'virgo': '9', 'libra': '4', 'scorpio': '7', 'sagittarius': '5', 'capricon': '6', 'aquarius': '7', 'pisces': '2'},
                        {id :11 ,'name': 'Aquarius', 'aries': '6', 'tarus': '3', 'gemini': '9', 'cancer': '4', 'leo': '7', 'virgo': '7', 'libra': '9', 'scorpio': '3', 'sagittarius': '8', 'capricon': '7', 'aquarius': '5', 'pisces': '4'},
                        {id :12 ,'name': 'Pisces', 'aries': '4', 'tarus': '7', 'gemini': '6', 'cancer': '10', 'leo': '6', 'virgo': '4', 'libra': '6', 'scorpio': '10', 'sagittarius': '4', 'capricon': '2', 'aquarius': '4', 'pisces': '3'}]
                }),
                columns: [
                    {text: 'Sign', dataIndex: 'name', flex: 1},
                    {text: 'Aries', dataIndex: 'aries', flex: 1},
                    {text: 'Tarus', dataIndex: 'tarus', flex: 1},
                    {text: 'Gemini', dataIndex: 'gemini', flex: 1},
                    {text: 'Cancer', dataIndex: 'cancer', flex: 1},
                    {text: 'Leo', dataIndex: 'leo', flex: 1},
                    {text: 'Virgo', dataIndex: 'virgo', flex: 1},
                    {text: 'Libra', dataIndex: 'libra', flex: 1},
                    {text: 'Scorpio', dataIndex: 'scorpio', flex: 1},
                    {text: 'Sagittarius', dataIndex: 'sagittarius', flex: 1},
                    {text: 'Capricon', dataIndex: 'capricon', flex: 1},
                    {text: 'Aquarius', dataIndex: 'aquarius', flex: 1},
                    {text: 'Pisces', dataIndex: 'pisces', flex: 1}

                ]
            }]
        this.callParent(arguments);
    }

});



