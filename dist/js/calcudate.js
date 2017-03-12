'use strict';

var calcudate = {
    add: function (date)  {
        // a is for amount
        date = date || new Date();
        var main = {
            seconds: function (amount)  {
                date.setSeconds(date.getSeconds() + amount);
                return date;
            },
            minutes: function (amount)  {
                date.setMinutes(date.getMinutes() + amount);
                return date;
            },
            hours: function (amount)  {
                date.setHours(date.getHours() + amount);
                return date;
            },
            days: function (amount)  {
                date.setDate(date.getDate() + amount);
                return date;
            },
            months: function (amount)  {
                date.setMonth(date.getMonth() + amount);
                return date;
            },
            years: function (amount)  {
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
    sub: function (date)  {
        // a is for amount
        date = date || new Date();
        var main = {
            seconds: function (amount)  {
                date.setSeconds(date.getSeconds() - amount);
                return date;
            },
            minutes: function (amount)  {
                date.setMinutes(date.getMinutes() - amount);
                return date;
            },
            hours: function (amount)  {
                date.setHours(date.getHours() - amount);
                return date;
            },
            days: function (amount)  {
                date.setDate(date.getDate() - amount);
                return date;
            },
            months: function (amount)  {
                date.setMonth(date.getMonth() - amount);
                return date;
            },
            years: function (amount)  {
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
    getLastOf: function (date)  {
        date = date || new Date();

        return {
            'd': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'day': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'date': new Date(date.getFullYear(), date.getMonth() + 1, 0)
        };
    },
    getStart: function (date)  {
        date = date || new Date();
        var starts = {
            'day': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0),
            'hour': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours())
        };
        starts.d = starts.day;
        starts.h = starts.hour;

        return starts;
    },
    getOffset: function (date)  {
        date = date || new Date();
        var offset = date.getTimezoneOffset(),
            toString = date.toString(),
            indexOfGMT = toString.indexOf('GMT');

        var offsets = {
            'int': offset,
            'str': toString.slice(indexOfGMT + 3, indexOfGMT + 8)
        };

        offsets.integer = offsets.i = offsets.int;
        offsets.string = offsets.s = offsets.str;

        return offsets;
    }
};
