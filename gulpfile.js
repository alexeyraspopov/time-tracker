var gulp = require('gulp'),
	rimraf = require('gulp-rimraf'),
	uglify = require('gulp-uglify'),
	browserify = require('gulp-browserify');

gulp.task('clean', function(){
	return gulp.src('./app/dist', { read: false })
		.pipe(rimraf());
});

gulp.task('build', ['clean'], function(){
	return gulp.src('./app/src/index.js')
		.pipe(browserify({
			transform: 'reactify',
			paths: ['./node_modules', './app/src']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./app/dist'));
});

gulp.task('default', ['build']);
