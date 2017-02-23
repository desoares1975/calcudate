'use strict';

const day = 86400000,
    hour = 3600000,
    min = 60000,
    sec = 1000;

const calcudate = {
    add: d => {
        // d is for data
        // a is for amount
        d = d || new Date();
        let main = {
            seconds: a => {
                return new Date(+d + (a * sec));
            },
            minutes: a => {
                return new Date(+d + (a * min));
            },
            hours: a => {
                return new Date(+d + (a * hour));
            },
            days: a => {
                return new Date(+d + (a * day));
            },
            months: a => {
                return new Date (d.getFullYear(), (d.getMonth() + a), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            years: a => {
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
    sub: d => {
        d = d || new Date();
        let main = {
            seconds: a => {
                return new Date(+d  - (sec * a));
            },
            minutes: a => {
                return new Date(+d - (min * a));
            },
            hours: a => {
                return new Date(+d - (a * hour));
            },
            days: a => {
                return new Date(+d - (a * day));
            },
            months: a => {
                return new Date (d.getFullYear(), (d.getMonth() - a), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            years: a => {
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
    getLastOf: d => {
        d = d || new Date();

        return {
            'day': new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(),
            'date': new Date(d.getFullYear(), d.getMonth() + 1, 0)
        };
    },
    getStart: d => {
        d = d || new Date();
        return {
            'day': new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0),
            'hour': new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours())
        };
    },
    getOffset: d => {
        d = d || new Date();
        let offset = d.getTimezoneOffset(),
            offsetToHours = (offset > 0 ? offset / 60 : offset / -60);

        return {
            'int': offset,
            'str':  (offset > 0 ? '-' : '+') +  (offsetToHours < 9 ? '0' + offsetToHours : offsetToHours) + '00'
        };
    }
};

module.exports = calcudate;
