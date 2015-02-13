var Reflux = require('reflux'),
	Immutable = require('immutable'),
	stateful = require('reflux-stateful'),
	actions = require('../actions/time-tracking'),
	Tracking = require('../models/tracking');

module.exports = Reflux.createStore({
	listenables: actions,
	mixins: [stateful],
	onAdd: function(description){
		var item = new Tracking(description);

		this.setState(this.state.set(item.id, item));
	},
	onRemove: function(id){
		this.setState(this.state.remove(id));
	},
	getDefaultData: function(){
		return Immutable.OrderedMap({
			'qwe': { id: 'qwe', start: '2000-10-20', description: 'feed a cat', duration: 3000 },
			'asc': { id: 'asc', start: '2000-10-20', description: 'rule the world', duration: 3000 },
			'dfv': { id: 'dfv', start: '2000-10-20', description: 'playing with lego', duration: 3000 },
			'erv': { id: 'erv', start: '2000-10-20', description: 'coding', duration: 3000 },
			'hgg': { id: 'hgg', start: '2000-10-20', description: 'sleeping', duration: 3000 }
		});
	},
	emit: function(){
		return this.state.toArray();
	}
});
