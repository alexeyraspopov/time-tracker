var EventsStore = require('../stores/events');

exports.destroy = function(id){
	EventsStore.destroy(id);
};

exports.update = function(id, data){
	EventsStore.update(id, data);
};
