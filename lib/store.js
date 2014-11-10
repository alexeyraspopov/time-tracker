var newsletter = require('newsletter');

var store = {};

store.read = function(){
	return Object.keys(this.store).map(function(key){
		return this.store[key];
	}, this);
};

store.publish = function(){
	this.signal.publish(this.read());
};

store.subscribe = function(callback){
	this.signal.subscribe(callback);
	callback(this.read());
};

store.create = function(data){
	this.update(Date.now(), data);
};

store.update = function(id, data){
	this.store[id] = this.unit(id, data);
	this.publish();
};

store.destroy = function(id){
	delete this.store[id];
	this.publish();
};

module.exports = function(unit){
	return Object.create(store, {
		store: { value: {}, enumerable: false, configurable: true },
		signal: { value: newsletter(), enumerable: false },
		unit: { value: unit, enumerable: false }
	});
};
