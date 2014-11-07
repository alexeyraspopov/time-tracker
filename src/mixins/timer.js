// should I have constructor?
module.exports = function(){
	return {
		setInterval: function(fn, interval){
			this.clearInterval();

			this.interval = setInterval(fn, interval);
		},
		clearInterval: function(){
			clearInterval(this.interval);

			this.interval = null;
		},
		componentWillUnmount: function(){
			this.clearInterval();
		}
	};
};
