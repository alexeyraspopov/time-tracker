/** @jsx React.DOM */

var React = require('react'),
	EventsActions = require('../actions/events');

var EventItem = React.createClass({

	destroy: function(){
		EventsActions.destroy(this.props.data.id);
	},

	render: function() {
		var data = this.props.data;

		return (
			<div>
				<p>{ data.start }: { data.note } ({ data.value })</p>
				<button onClick={ this.destroy }>&times;</button>
			</div>
		);
	}

});

module.exports = EventItem;
