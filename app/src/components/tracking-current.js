var React = require('react'),
	actions = require('actions/tracking'),
	time = require('lib/time');

var Current = React.createClass({

	getInitialState: function(){
		return { duration: 0 };
	},

	componentDidMount: function(){
		this.props.data && this.startTimer();
	},

	componentWillUnmount: function(){
		this.stopTimer();
	},

	componentWillReceiveProps: function(nextProps){
		nextProps.data ? this.startTimer() : this.stopTimer();
	},

	startTimer: function(){
		this.timer = setInterval(this.nextTick, 1000);
	},

	stopTimer: function(){
		clearInterval(this.timer);
		this.setState({ duration: 0 });
	},

	nextTick: function(){
		this.setState({
			duration: time.diff(new Date(), this.props.data.start)
		});
	},

	render: function(){
		var data = this.props.data,
			duration = time.format('HH:mm:ss', this.state.duration);

		return (
			<div>
				{
					data
						? <button onClick={ actions.stop }>Stop { data.description } ({ duration })</button>
						: <button onClick={ actions.start.bind(null, null) }>Add</button>
				}
			</div>
		);
	}

});

module.exports = Current;
