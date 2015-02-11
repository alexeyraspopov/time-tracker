var dispatcher = require('../dispatcher'),
	constants = require('../constants/time-tracking');

exports.remove = function(id){
	dispatcher.dispatch({
		actionType: constants.REMOVE_TRACKING,
		id: id
	});
};

exports.add = function(description){
	dispatcher.dispatch({
		actionType: constants.ADD_TRACKING,
		description: description
	});
};
