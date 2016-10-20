'use strict';

const hour = 3600000;
const day = 86400000;

module.exports.date = {
    add: function (date) {
        date = date || new Date();
        return {
            'hours': amount => {
                return new Date(date.getTime() + (amount * hour));
            },
            'days': amount => {
                return new Date(date.getTime() + (amount * day));
            },
            'months': amount => {
                return new Date (date.getFullYear(), (date.getMonth() + amount), date.getDate());
            }
        };
    },
    sub: function (date) {
        date = date || new Date();
        return {
            'hours': amount => {
                return new Date(date.getTime() - (amount * hour));
            },
            'days': amount => {
                return new Date(date.getTime() - (amount * day));
            },
            'months': amount => {
                return new Date (date.getFullYear(), (date.getMonth() - amount), date.getDate());
            }
        };
    },
    last: function (date) {
        date = date || new Date();
        return {
            'day': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            'date': new Date(date.getFullYear(), date.getMonth() + 1, 0)
        };
    },
    getIni: function (date) {
        date = date || new Date();
        return {
            'hour': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()),
            'day': new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            'month': new Date(date.getFullYear(), date.getMonth(), '01')
        };
    },
    getOffset: function (date) {
        date = date || new Date();
    }
};