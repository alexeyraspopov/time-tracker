// TODO: prop types
/** @jsx React.DOM */
var React = require('react'),
	moment = require('moment'),
	TimerBehavior = require('../mixins/timer')();

function formattedTime(seconds){
	return moment()
		.startOf('day')
		.seconds(seconds)
		.format('H:mm:ss');
}

var Timer = React.createClass({

	mixins: [TimerBehavior],

	getDefaultProps: function(){
		return { start: 0, running: false };
	},

	getInitialState: function(){
		return { seconds: Number(this.props.start) };
	},

	componentDidMount: function(){
		this.setInterval(this.tick, 1000);
	},

	componentWillReceiveProps: function(nextProps){
		if(this.props.start !== nextProps.start){
			this.setState({ seconds: Number(nextProps.start) });
		}

		if(nextProps.running){
			this.setInterval(this.tick, 1000);
		}else{
			this.clearInterval();
		}
	},

	tick: function(){
		var newSeconds = this.state.seconds + Number(this.props.running);

		this.setState({ seconds: newSeconds });
	},

	render: function(){
		return (
			<time>{ formattedTime(this.state.seconds) }</time>
		);
	}

});

module.exports = Timer;
