var React = require('react'),
	List = require('./components/list.react'),
	EventItem = require('./components/event-item.react'),
	EventsStore = require('./stores/events');

EventsStore.subscribe(function(events){
	React.render(<List items={ events } wrapper={ EventItem } />, document.querySelector('main'));
});

window.events = EventsStore;
