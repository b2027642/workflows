var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');


var coffeeSources = ['_components/coffee/tagline.coffee'];
var jsSources = ['_components/scripts/rclick.js',
'_components/scripts/pixgrid.js',
'_components/scripts/tagline.js',
'_components/scripts/template.js'];

gulp.task('coffee', function(){
	gulp.src(coffeeSources)
.pipe(coffee({bare:true})
	.on('error', gutil.log))
	.pipe(gulp.dest('_components/scripts'))
	
});




gulp.task('js',function () {
	gulp.src(coffeeSources)
	.pipe(concat('script.js'))
	.pipe(gulp.dest('_builds/_components/js'))
});