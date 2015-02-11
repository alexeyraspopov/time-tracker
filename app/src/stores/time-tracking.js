var Reflux = require('reflux'),
	Immutable = require('immutable'),
	actions = require('../actions/time-tracking'),
	uuid = require('uuid');

var seed = Immutable.OrderedMap({
	'qwe': { start: '2000-10-20', description: 'feed a cat', duration: 3000 },
	'asc': { start: '2000-10-20', description: 'rule the world', duration: 3000 },
	'dfv': { start: '2000-10-20', description: 'playing with lego', duration: 3000 },
	'erv': { start: '2000-10-20', description: 'coding', duration: 3000 },
	'hgg': { start: '2000-10-20', description: 'sleeping', duration: 3000 }
});

module.exports = Reflux.createStore({
	listenables: actions,
	onAdd: function(description){
		seed = seed.set(uuid.v4(), { description: description });
		this.trigger(seed);
	},
	onRemove: function(id){
		seed = seed.remove(id);
		this.trigger(seed);
	},
	getTracking: function(){
		return seed;
	}
});
