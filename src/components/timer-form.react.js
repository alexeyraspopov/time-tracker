/** @jsx React.DOM */

var React = require('react'),
	Timer = require('./timer.react');

var TimerForm = React.createClass({

	getDefaultProps: function(){
		return { onStop: function(){} };
	},

	getInitialState: function(){
		return { running: false };
	},

	startTimer: function(){
		this.setState({ running: true, startTime: Date.now() });
	},

	stopTimer: function(){
		this.setState({ running: false, stopTime: Date.now() }, function(){
			this.props.onStop({
				start: this.state.startTime,
				stop: this.state.stopTime
			});
		});
	},

	render: function(){
		return (
			<div>
				<Timer running={ this.state.running } />
				<button onClick={ this.startTimer }>Start</button>
				<button onClick={ this.stopTimer }>Stop</button>
			</div>
		);
	}

});

module.exports = TimerForm;
