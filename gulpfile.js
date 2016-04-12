var gulp, gutil, webserver, minhtml, postcss, autoprefixer, precss, cssnano, animation, concat,
    browserify, uglify, annotate, sourcemaps, useref, gulpIf;

gulp = require('gulp'),
gutil = require('gulp-util'),
webserver = require('gulp-webserver');
minhtml = require('gulp-minify-html');
postcss = require('gulp-postcss');
autoprefixer = require('autoprefixer');
precss = require('precss');
cssnano = require('cssnano');
animation = require('postcss-animation');
concat = require('gulp-concat');
browserify = require('gulp-browserify');
uglify = require('gulp-uglify');
annotate = require('gulp-ng-annotate');
sourcemaps = require('gulp-sourcemaps');
useref = require('gulp-useref');
gulpIf = require('gulp-if');

var source, dest, jsSources;

source = 'process/';
dest = 'builds/dev/';

jsSources = [
  'process/js/app.js'
]

gulp.task('html', ['useref'], function(){
  gulp.src(source + '*.html')
    .pipe(useref())
    .pipe(minhtml())
    .pipe(gulp.dest(dest));
});

gulp.task('useref', function(){
    return gulp.src(source+'*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest(dest))
});

gulp.task('css', function(){
  gulp.src(source + 'css/style.css')
    .pipe(postcss([
      precss(),
      animation(),
      autoprefixer(),
      cssnano()
    ]))
    .on('error', gutil.log)
    .pipe(gulp.dest(dest + 'css'));
});

gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat('app.js'))
    .pipe(browserify())
    .pipe(annotate())
    .pipe(uglify())
    .pipe(gulp.dest(dest +'js'));
});


gulp.task('watch', function() {
  gulp.watch(source + '**/*.js', ['js']);
  gulp.watch(source + '**/*.css', ['css']);
  gulp.watch(source + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['html', 'css', 'js', 'webserver','watch']);