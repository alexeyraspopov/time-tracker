var uuid = require('uuid');

function Tracking(description, duration){
	this.id = uuid.v4();
	this.description = description;
	this.start = new Date();
	this.duration = duration || 0;
}

module.exports = Tracking;
