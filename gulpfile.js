var gulp = require('gulp'),
	browserify = require('gulp-browserify');

gulp.task('clean', function(){
	return gulp.src('./app/dist', { read: false })
		.pipe(rimraf());
});

gulp.task('build', ['clean'], function(){
	return gulp.src('./app/src/index.js')
		.pipe(browserify({ transform: 'reactify' }))
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('default', ['build']);
