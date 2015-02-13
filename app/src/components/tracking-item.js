var React = require('react'),
	actions = require('../actions/tracking');

var TrackingItem = React.createClass({

	render: function() {
		var data = this.props.tracking;

		return (
			<div>
				{ data.description }
				<button onClick={ actions.start.bind(null, data.description) }>Start</button>
				<button onClick={ actions.remove.bind(null, data) }>Remove</button>
			</div>
		);
	}

});

module.exports = TrackingItem;
