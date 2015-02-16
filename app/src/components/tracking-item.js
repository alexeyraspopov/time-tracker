var React = require('react'),
	actions = require('../actions/tracking'),
	time = require('../lib/time');

var TrackingItem = React.createClass({

	render: function() {
		var data = this.props.tracking,
			duration = time.format('HH:mm:ss', data.duration);

		return (
			<div>
				{ data.description } ({ duration })
				<button onClick={ actions.start.bind(null, data.description) }>Start</button>
				<button onClick={ actions.remove.bind(null, data) }>Remove</button>
			</div>
		);
	}

});

module.exports = TrackingItem;
