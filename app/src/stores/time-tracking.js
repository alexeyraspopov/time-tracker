var dispatcher = require('../dispatcher'),
	Immutable = require('immutable'),
	uuid = require('uuid'),
	events = new (require('eventemitter3').EventEmitter)(),
	constants = require('../constants/time-tracking');

var seed = Immutable.OrderedMap({
	'qwe': { start: '2000-10-20', description: 'feed a cat', duration: 3000 },
	'asc': { start: '2000-10-20', description: 'rule the world', duration: 3000 },
	'dfv': { start: '2000-10-20', description: 'playing with lego', duration: 3000 },
	'erv': { start: '2000-10-20', description: 'coding', duration: 3000 },
	'hgg': { start: '2000-10-20', description: 'sleeping', duration: 3000 }
});

dispatcher.register(function(action){
	switch(action.actionType){
		case constants.REMOVE_TRACKING:
			seed = seed.remove(action.id);
			break;

		case constants.ADD_TRACKING:
			seed = seed.set(uuid.v4(), { description: action.description });
			break;
	}

	store.emit('update');
});

var store = {
	on: function(event, callback){
		events.on(event, callback);
	},

	removeListener: function(event, callback){
		events.removeListener(event, callback);
	},

	emit: function(event){
		events.emit(event);
	},

	getTracking: function(){
		return seed;
	}
};

module.exports = store;
