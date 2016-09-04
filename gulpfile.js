'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');


gulp.task('browserify', function() {
	var production = gutil.env.type === 'production';

	gulp.src(['src/js/index.js'], {read: false})

		.pipe(browserify({
			debug: !production,
			transform: ['reactify'],
			extensions: ['.jsx']
		}))

		.on('prebundle', function(bundler) {
			bundler.require('react');
		})

		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('sass', function () {
	return gulp.src('./src/sass/main.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('js:watch',function(){
	gulp.watch('src/js/index.js', ['browserify']);
});
