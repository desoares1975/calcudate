'use strict';

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
            'd': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'day': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'date': new Date(date.getFullYear(), date.getMonth() + 1, 0)
        };
    },
    getStart: date => {
        date = date || new Date();
        let starts = {
            'day': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0),
            'hour': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours())
        };
        starts.d = starts.day;
        starts.h = starts.hour;

        return starts;
    },
    getOffset: date => {
        date = date || new Date();
        let offset = date.getTimezoneOffset(),
            toString = date.toString(),
            indexOfGMT = toString.indexOf('GMT');

        let offsets = {
            'int': offset,
            'str': toString.slice(indexOfGMT + 3, indexOfGMT + 8)
        };

        offsets.integer = offsets.i = offsets.int;
        offsets.string = offsets.s = offsets.str;

        return offsets;
    }
};

module.exports = calcudate;
