var React = require('react'),
	actions = require('../actions/tracking');

var Current = React.createClass({

	render: function() {
		var data = this.props.data;

		return (
			<div>
				{
					data
						? <button onClick={ actions.stop }>Stop { data.description }</button>
						: <button onClick={ actions.start.bind(null, null) }>Add</button>
				}
			</div>
		);
	}

});

module.exports = Current;
