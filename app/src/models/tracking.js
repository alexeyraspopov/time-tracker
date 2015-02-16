var uuid = require('uuid');

function Tracking(description, start, duration){
	this.id = uuid.v4();
	this.description = description;
	this.start = start || 0;
	this.duration = duration || 0;
}

module.exports = Tracking;
