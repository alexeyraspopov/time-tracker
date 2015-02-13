var Reflux = require('reflux'),
	actions = Reflux.createActions(['start', 'stop', 'remove']);

// how can we use custom modal window?
actions.start.preEmit = function(description){
	return description || prompt('New Tracking');
};

actions.remove.shouldEmit = function(tracking){
	return confirm('Do you really want to remove the record "' + tracking.description + '"?');
};

module.exports = actions;
