var Reflux = require('reflux'),
	Immutable = require('immutable'),
	stateful = require('reflux-stateful'),
	actions = require('../actions/tracking'),
	Tracking = require('../models/tracking'),
	time = require('../lib/time');

module.exports = Reflux.createStore({
	listenables: actions,
	mixins: [stateful],

	onStart: function(description){
		// TODO: check current
		this.setState({
			current: { description: description, start: new Date() }// new Tracking(description, new Date())
		});
	},

	onStop: function(){
		var current = this.state.current,
			diff = time.diff(new Date(), current.start),
			item = new Tracking(current.description, current.start, diff);

		this.setState({
			items: this.state.items.set(item.id, item),
			current: null
		});
	},

	onRemove: function(item){
		this.setState({
			items: this.state.items.remove(item.id)
		});
	},

	getDefaultData: function(){
		return {
			items: Immutable.OrderedMap({
				'qwe': { id: 'qwe', start: '2000-10-20', description: 'feed a cat', duration: 3000 },
				'asc': { id: 'asc', start: '2000-10-20', description: 'rule the world', duration: 3000 },
				'dfv': { id: 'dfv', start: '2000-10-20', description: 'playing with lego', duration: 3000 },
				'erv': { id: 'erv', start: '2000-10-20', description: 'coding', duration: 3000 },
				'hgg': { id: 'hgg', start: '2000-10-20', description: 'sleeping', duration: 3000 }
			}),
			current: null
		};
	},

	emit: function(){
		var state = this.state;

		return { items: state.items.toArray(), current: state.current };
	}
});
