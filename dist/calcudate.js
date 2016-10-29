'use strict';

const day = 86400000;
const hour = 3600000;
const min = 60000;
const sec = 1000;

module.exports = {
    add: function (date) {
        date = date || new Date();
        return {
            'secs': amount => {
                return new Date(date.getTime() + (amount * sec));
            },
            'minutes': amount => {
                return new Date(date.getTime() + (amount * min));
            },
            'hours': amount => {
                return new Date(date.getTime() + (amount * hour));
            },
            'days': amount => {
                return new Date(date.getTime() + (amount * day));
            },
            'months': amount => {
                return new Date (date.getFullYear(), (date.getMonth() + amount), date.getDate(), date.getHours());
            },
            'years': amount => {
                return new Date ((date.getFullYear() + amount), date.getMonth(), date.getDate(), date.getHours());
            }
        };
    },
    sub: function (date) {
        date = date || new Date();
        return {
            'secs': amount => {
                return new Date(date.getTime()  - (sec * amount));
            },
            'minutes': amount => {
                return new Date(date.getTime() - (min * amount));
            },
            'hours': amount => {
                return new Date(date.getTime() - (amount * hour));
            },
            'days': amount => {
                return new Date(date.getTime() - (amount * day));
            },
            'months': amount => {
                return new Date (date.getFullYear(), (date.getMonth() - amount), date.getDate(), date.getHours());
            },
            'years': amount => {
                return new Date((date.getFullYear() - amount), date.getMonth(), date.getDate(), date.getHours());
            }
        };
    },
    getLastOf: function (date) {
        date = date || new Date();
        return {
            'day': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'date': new Date(date.getFullYear(), date.getMonth() + 1, 0)
        };
    },
    getOffset: function (date) {
        date = date || new Date();
        let offset = date.getTimezoneOffset();
        let offsetToHours = offset / 60;

        return {
            'int': offset,
            'str':  (offset > 0 ? '-' : '+') +  (offsetToHours < 9 ? '0' + offsetToHours : offsetToHours) + '00'
        };
    }
};