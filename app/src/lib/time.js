function diff(a, b){
	return Math.floor((a.getTime() - b.getTime()) / 1000);
}

function format(pattern, seconds){
	return pattern.replace(/-/g, function(){

	});
}

exports.diff = diff;
exports.format = format;
