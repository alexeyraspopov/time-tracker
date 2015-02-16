var moment = require('moment');

function offsetToMS(offset){
	// offset * 60 * 1000
	return offset * 60000;
}

function diff(a, b){
	// return new Date(a - b + offsetToMS(a.getTimezoneOffset()));
	return moment(a).diff(moment(b));
}

function format(pattern, time){
	return moment(time).utcOffset(0).format(pattern);
}

exports.diff = diff;
exports.format = format;
