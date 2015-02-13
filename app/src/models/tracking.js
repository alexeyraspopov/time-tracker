var uuid = require('uuid');

function Tracking(description, start, duration){
	this.id = uuid.v4();
	this.description = description;
	this.start = start;
	this.duration = duration;
}

module.exports = Tracking;
