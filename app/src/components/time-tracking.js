var React = require('react'),
	Immutable = require('immutable'),
	actions = require('../actions/time-tracking'),
	store = require('../stores/time-tracking');

var TimeTracking = React.createClass({

	getInitialState: function(){
		return { items: store.emit() };
	},

	componentDidMount: function(){
		this.unsubscribe = store.listen(this.updateTracking);
	},

	componentWillUnmount: function(){
		this.unsubscribe();
	},

	updateTracking: function(){
		this.setState(this.getInitialState());
	},

	addTracking: function(){
		var description = prompt('New Tracking');

		actions.add(description);
	},

	removeTracking: function(id){
		actions.remove(id);
	},

	render: function() {
		var items = this.state.items;

		return (
			<div>
				<button onClick={ this.addTracking }>Add</button>
				<ul>
					{ items.map(function(v){
						return (
							<li key={ v.id }>
								{ v.description }
								<button onClick={ this.removeTracking.bind(this, v.id) }>Remove</button>
							</li>
						);
					}, this) }
				</ul>
			</div>
		);
	}

});

module.exports = TimeTracking;
