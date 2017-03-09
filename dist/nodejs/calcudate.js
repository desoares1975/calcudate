'use strict';

const day = 86400000,
    hour = 3600000,
    min = 60000,
    sec = 1000;

const calcudate = {
    add: date => {
        // a is for amount
        date = date || new Date();
        let main = {
            seconds: amount => {
                date.setSeconds(date.getSeconds() + amount);
                return date;
            },
            minutes: amount => {
                date.setMinutes(date.getMinutes() + amount);
                return date;
            },
            hours: amount => {
                date.setHours(date.getHours() + amount);
                return date;
            },
            days: amount => {
                date.setDate(date.getDate() + amount);
                return date;
            },
            months: amount => {
                date.setMonth(date.getMonth() + amount);
                return date;
            },
            years: amount => {
                date.setFullYear(date.getFullYear() + amount);
                return date;
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
    sub: date => {
        // a is for amount
        date = date || new Date();
        let main = {
            seconds: amount => {
                date.setSeconds(date.getSeconds() - amount);
                return date;
            },
            minutes: amount => {
                date.setMinutes(date.getMinutes() - amount);
                return date;
            },
            hours: amount => {
                date.setHours(date.getHours() - amount);
                return date;
            },
            days: amount => {
                date.setDate(date.getDate() - amount);
                return date;
            },
            months: amount => {
                date.setMonth(date.getMonth() - amount);
                return date;
            },
            years: amount => {
                date.setFullYear(date.getFullYear() - amount);
                return date;
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
    getLastOf: date => {
        date = date || new Date();

        return {
            'day': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'date': new Date(date.getFullYear(), date.getMonth() + 1, 0)
        };
    },
    getStart: date => {
        date = date || new Date();
        return {
            'day': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0),
            'hour': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours())
        };
    },
    getOffset: d => {
        d = d || new Date();
        let offset = d.getTimezoneOffset(),
            offsetToHours = (offset > 0 ? offset / 60 : offset / -60),
            isFloat = offset % 1 !== 0;

        let offsets = {
            'int': offset,
            'str':  (offset > 0 ? '-' : '+') +
                (offsetToHours < 9 ? '0' + parseInt(offsetToHours) :
                    parseInt(offsetToHours)) + '00',
            'unsStr': (offsetToHours < 9 ? '0' + offsetToHours : offsetToHours) + '00',
            'midnight': (offsetToHours < 9 ? '0' + offsetToHours : offsetToHours) + ':00'

        };

        offsets.integer = offsets.int;
        offsets.string = offsets.str;
        offsets.unsigStr = offsets.unsignedString = offsets.unsStr;

        return offsets;
    }
};

module.exports = calcudate;
