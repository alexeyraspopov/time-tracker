var gulp = require('gulp'),
	browserify = require('gulp-browserify');

gulp.task('build', function(){
	return gulp.src('./src/index.js')
		.pipe(browserify({ transform: 'reactify' }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
