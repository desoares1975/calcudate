'use strict';

var day = 86400000,
    hour = 3600000,
    min = 60000,
    sec = 1000;

var caludate = {
    add: function (d) {
        // d is for data
        // a is for amount
        d = d || new Date();
        var main = {
            seconds: function (a) {
                return new Date(d.getTime() + (a * sec));
            },
            minutes: function (a) {
                return new Date(d.getTime() + (a * min));
            },
            hours: function (a) {
                return new Date(d.getTime() + (a * hour));
            },
            days: function (a) {
                return new Date(d.getTime() + (a * day));
            },
            months: function (a) {
                return new Date (d.getFullYear(), (d.getMonth() + a), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            years: function (a) {
                return new Date ((d.getFullYear() + a), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            }
        };

        main.secs = main.s = main.seconds;
        main.m = main.mins = main.i = main.minutes;
        main.h = main.hours;
        main.d = main.days;
        main.M = main.mo = main.months;
        main.y = main.Y = main.years;

        return main;
    },
    sub: function (d) {
        d = d || new Date();
        var main = {
            seconds: function (a) {
                return new Date(d.getTime()  - (sec * a));
            },
            minutes: function (a) {
                return new Date(d.getTime() - (min * a));
            },
            hours: function (a) {
                return new Date(d.getTime() - (a * hour));
            },
            days: function (a) {
                return new Date(d.getTime() - (a * day));
            },
            months: function (a) {
                return new Date (d.getFullYear(), (d.getMonth() - a), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            years: function (a) {
                return new Date((d.getFullYear() - a), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            }
        };

        main.s = main.secs = main.seconds;
        main.m = main.mins = main.i = main.minutes;
        main.h = main.hours;
        main.d = main.days;
        main.M = main.mo = main.months;
        main.y = main.Y = main.years;

        return main;
    },
    getLastOf: function (d) {
        d = d || new Date();
        return {
            'day': new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(),
            'date': new Date(d.getFullYear(), d.getMonth() + 1, 0)
        };
    },
    getStart: function (d) {
        d = d || new Date();
        return {
            'day': new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0),
            'hour': new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours())
        };
    },
    getOffset: function (d) {
        d = d || new Date();
        var offset = d.getTimezoneOffset(),
            offsetToHours = offset / 60;

        return {
            'int': offset,
            'str':  (offset > 0 ? '-' : '+') +  (offsetToHours < 9 ? '0' + offsetToHours : offsetToHours) + '00'
        };
    }
};
