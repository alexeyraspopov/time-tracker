var Reflux = require('reflux'),
	Immutable = require('immutable'),
	stateful = require('reflux-stateful'),
	actions = require('../actions/tracking'),
	Tracking = require('../models/tracking');

module.exports = Reflux.createStore({
	listenables: actions,
	mixins: [stateful],

	onStart: function(description){
		this.setState({
			current: new Tracking(description)
		});
	},

	onStop: function(){
		var item = this.state.current;

		this.setState({
			items: this.state.items.set(item.id, item),
			current: null
		});
	},

	onRemove: function(id){
		this.setState({
			items: this.state.items.remove(id)
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
