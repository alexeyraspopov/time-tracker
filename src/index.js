var React = require('react'),
	TimerForm = require('./components/timer-form.react');

function boo(){
	console.log(arguments);
}

React.render(<TimerForm onStop={boo}/>, document.querySelector('main'));

window.React = React;
