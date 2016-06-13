var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('default',function () {
	gulp.src('css/*.css')
	.pipe(minifycss())
    .pipe(gulp.dest('build-css/'))

    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build-js/'))
});