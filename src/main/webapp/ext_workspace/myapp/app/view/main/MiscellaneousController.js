/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




Ext.define('MyApp.view.main.MiscellaneousController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.miscellaneousController',
    init: function () {
        this.control({

        });
    },
    getMonthInfoMap: function () {
        if (!this.monthMap) {
            var map = new Ext.util.HashMap();
            map.add('Jan', '01');
            map.add('Feb', '02');
            map.add('Mar', '03');
            map.add('Apr', '04');
            map.add('May', '05');
            map.add('Jun', '06');
            map.add('Jul', '07');
            map.add('Aug', '08');
            map.add('Sep', '09');
            map.add('Oct', '10');
            map.add('Nov', '11');
            map.add('Dec', '12');
            this.monthMap = map;
        }
        return this.monthMap;
    },

    onPlayerProcess: function () {
        var view = this.getView();
        var playerProcessPanel = view.down('#playerProcessPanel');
        playerProcessPanel.setVisible(!playerProcessPanel.isVisible());
    },
    onParseDOB: function () {
        var view = this.getView();
        var formatedDobs = [];
        var signs = [];
        var uuids = [];
        var playerProcessPanel = view.down('#playerProcessPanel');
        var dobs = playerProcessPanel.down('textarea[name=dob]').getValue();

        if (Ext.isDefined(dobs)) {
            var playerDobs = dobs.split('!');
            this.monthMap = this.getMonthInfoMap();

            var monthData = ['Mar 21 - Apr 19', 'Apr 20 - May 20', 'May 21 - Jun 20', 'Jun 21 - Jul 22', 'Jul 23 - Aug 22', 'Aug 23 - Sep 22', 'Sep 23 - Oct 22', 'Oct 23 - Nov 21', 'Nov 22 - Dec 21', 'Dec 22 - Jan 19', 'Jan 20 - Feb 18', 'Feb 19 - Mar 20'];
            for (var i = 0; i < playerDobs.length; i++) {
                var dob = playerDobs[i];//May 17, 1990
                var dobData = dob.split(',');
                var year = dobData[1].trim();
                var month = dobData[0].split(' ')[0].trim();
                var day = dobData[0].split(' ')[1].trim();
                var less = false;
                let uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
                uuids.push(uniqueId);
                formatedDobs.push(day + '/' + this.monthMap.get(month) + '/' + year);//18/01/2020
                for (var j = 0; j < monthData.length; j++) {
                    var monthDta = monthData[j];
                    if (monthDta.indexOf(month) > -1) {
                        var m1 = monthDta.split('-')[0].trim();
                        if (m1.indexOf(month) > -1) {
                            m1 = m1.split(' ')[1].trim();
                            less = true;
                        } else {
                            m1 = monthDta.split('-')[1].trim();
                            m1 = m1.split(' ')[1].trim();
                            less = false;
                        }
                        var intDay = parseInt(day);
                        var monthDay = parseInt(m1);
                        if (intDay == monthDay) {
                            signs.push(j + 1);
                        } else {
                            if (less) {
                                if (intDay > monthDay) {
                                    signs.push(j + 1);
                                }
                            } else {
                                if (intDay < monthDay) {
                                    signs.push(j + 1);
                                }
                            }
                        }
                    }
                }

            }

        }

        console.log(signs.toString());
        console.log(formatedDobs.toString());
        playerProcessPanel.down('textarea[name=dob]').setValue(formatedDobs.toString());
        playerProcessPanel.down('textarea[name=signs]').setValue(signs.toString());
        playerProcessPanel.down('textarea[name=uuids]').setValue(uuids.toString());
    },
    onGenerateUUID: function () {
        var view = this.getView();
        var playerProcessPanel = view.down('#playerProcessPanel');

    }, onReset: function () {
        var view = this.getView();
        var playerProcessPanel = view.down('#playerProcessPanel');
        playerProcessPanel.getForm().reset();
    }
});
