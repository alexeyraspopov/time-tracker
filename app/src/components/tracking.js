var React = require('react'),
	Immutable = require('immutable'),
	actions = require('../actions/tracking'),
	store = require('../stores/tracking'),
	TrackingItem = require('./tracking-item');

var TimeTracking = React.createClass({

	getInitialState: function(){
		return store.emit();
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

	// TODO: replace it with async chain
	startTracking: function(description){
		actions.start(description || prompt('New Tracking'));
	},

	render: function() {
		var items = this.state.items,
			current = this.state.current;

		return (
			<div>
				{
					current
						? <button onClick={ actions.stop }>Stop { current.description }</button>
						: <button onClick={ this.startTracking.bind(this, null) }>Add</button>
				}
				<ul>
					{ items.map(function(v){
						return (
							<li key={ v.id }>
								<TrackingItem tracking={ v }/>
							</li>
						);
					}, this) }
				</ul>
			</div>
		);
	}

});

module.exports = TimeTracking;
