var React = require('react'),
	Immutable = require('immutable'),
	actions = require('../actions/time-tracking'),
	store = require('../stores/time-tracking');

var TimeTracking = React.createClass({

	getInitialState: function(){
		return { items: store.getTracking() };
	},

	componentDidMount: function(){
		store.on('update', this.updateTracking);
	},

	componentWillUnmount: function(){
		store.removeListener('update', this.updateTracking);
	},

	updateTracking: function(){
		this.setState(this.getInitialState());
	},

	addTracking: function(){
		var description = prompt('New Tracking');

		actions.add(description);
	},

	render: function() {
		var items = this.state.items;

		return (
			<div>
				<button onClick={ this.addTracking }>Add</button>
				<ul>
					{ items.map(function(v, k){
						var removeAction = function(){ actions.remove(k); };

						return <li key={ k }>{ v.description }<button onClick={ removeAction }>Remove</button></li>;
					}).toArray() }
				</ul>
			</div>
		);
	}

});

module.exports = TimeTracking;
