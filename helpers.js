'use strict';
const hour = 3600000;
const day = 86400000;

module.exports = {
	'date': {
		'add': date => {
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
		'sub': (date) => {
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
		'last': date => {
			return {
				'day': new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
				'date': new Date(date.getFullYear(), date.getMonth() + 1, 0)
			};
		},
		'getIni': date => {
			return {
				'hour': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()),
				'day': new Date(date.getFullYear(), date.getMonth(), date.getDate()),
				'month': new Date(date.getFullYear(), date.getMonth(), '01')
			};
		}
	},
	'handleTime': stat => {
		return (stat.response_time ? stat.response_time : (new Date() - new Date(stat.response_time)) / 1000);
	},
	'handleSnitchTime': snitch => {
		return (snitch.time_to_receive ? snitch.time_to_receive : (new Date() - snitch.request_queued_at) / 1000);
	},
	'getMedian': array => {
		let half = Math.floor((array.length - 1) / 2);
		array.sort((a, b) => a - b);

		if (array.length % 2) {
			return array[half];
		}

		return (array[half] + array[half - 1]) / 2;
	},
	'getPercentage': (total, parcial) => {
		if (total === 0) {
			return null;
		}

		return (100 * parcial) / total;
	},
	'secondsToTime': seconds => {
		if (seconds === null || isNaN(seconds)) {
			return '- -';
		}
		seconds = Number(seconds);

		let h = Math.floor(seconds / 3600);
		let m = Math.floor(seconds % 3600 / 60);
		let s = Math.floor(seconds % 3600 % 60);

		h = (h > 9 ? h : (h > 0 ? '0' + h : '00'));
		m = (m > 9 ? m : (m > 0 ? '0' + m : '00'));
		s = (s > 9 ? s : (s > 0 ? '0' + s : '00'));

		return h + ':' + m  + ':' + s;
	}
};
