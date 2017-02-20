'use strict';

const day = 86400000;
const hour = 3600000;
const min = 60000;
const sec = 1000;

module.exports = {
    add: function (d) {
        d = d || new Date();
        return {
            'secs': amount => {
                return new Date(d.getTime() + (amount * sec));
            },
            'minutes': amount => {
                return new Date(d.getTime() + (amount * min));
            },
            'hours': amount => {
                return new Date(d.getTime() + (amount * hour));
            },
            'days': amount => {
                return new Date(d.getTime() + (amount * day));
            },
            'months': amount => {
                return new Date (d.getFullYear(), (d.getMonth() + amount), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            'years': amount => {
                return new Date ((d.getFullYear() + amount), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            }
        };
    },
    sub: function (d) {
        d = d || new Date();
        return {
            'secs': amount => {
                return new Date(d.getTime()  - (sec * amount));
            },
            'minutes': amount => {
                return new Date(d.getTime() - (min * amount));
            },
            'hours': amount => {
                return new Date(d.getTime() - (amount * hour));
            },
            'days': amount => {
                return new Date(d.getTime() - (amount * day));
            },
            'months': amount => {
                return new Date (d.getFullYear(), (d.getMonth() - amount), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            },
            'years': amount => {
                return new Date((d.getFullYear() - amount), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            }
        };
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
        let offset = d.getTimezoneOffset();
        let offsetToHours = offset / 60;

        return {
            'int': offset,
            'str':  (offset > 0 ? '-' : '+') +  (offsetToHours < 9 ? '0' + offsetToHours : offsetToHours) + '00'
        };
    }
};
