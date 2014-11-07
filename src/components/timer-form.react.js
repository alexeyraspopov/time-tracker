/** @jsx React.DOM */

var React = require('react'),
	Timer = require('./timer.react');

var TimerForm = React.createClass({

	propTypes: {
		onStop: React.PropTypes.func
	},

	getDefaultProps: function(){
		return { onStop: function(){} };
	},

	getInitialState: function(){
		return { running: false, start: new Date() };
	},

	startTimer: function(){
		this.setState({ running: true, start: new Date() });
	},

	stopTimer: function(){
		this.setState({ running: false, stop: new Date() });
		this.props.onStop(this.state);
	},

	render: function(){
		return (
			<div>
				<Timer start={ this.state.start } running={ this.state.running } />
				<button onClick={ this.startTimer }>Start</button>
				<button onClick={ this.stopTimer }>Stop</button>
			</div>
		);
	}

});

module.exports = TimerForm;
