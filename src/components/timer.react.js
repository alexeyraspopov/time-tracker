/** @jsx React.DOM */

var React = require('react'),
	moment = require('moment');

function diff(now, then){
	return moment.utc(moment(now).diff(moment(then))).format("HH:mm:ss");
}

var Timer = React.createClass({

	propTypes: {
		start: React.PropTypes.instanceOf(Date).isRequired,
		running: React.PropTypes.bool
	},

	getDefaultProps: function(){
		return { running: false };
	},

	getInitialState: function(){
		return { date: this.props.start };
	},

	componentDidMount: function(){
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function(){
		clearInterval(this.interval);
	},

	componentWillReceiveProps: function(nextProps){
		if(nextProps.running){
			this.setState({ date: nextProps.start });
		}
	},

	tick: function(){
		if(this.props.running){
			this.setState({ date: new Date() });
		}
	},

	render: function(){
		return (
			<time>{ diff(this.state.date, this.props.start) }</time>
		);
	}

});

module.exports = Timer;
