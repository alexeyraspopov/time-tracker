var Store = require('../../lib/store');

function unit(id, data){
	return {
		id: id,
		start: data.start.toUTCString(),
		duration: data.duration,
		value: data.value,
		note: data.note
	};
}

module.exports = Store(unit);
