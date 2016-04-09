var gulp, gutil, webserver, minhtml, postcss, autoprefixer, precss, cssnano, animation, concat,
    browserify, uglify;

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

var source, dest;

source = 'process/';
dest = 'builds/dev/';


gulp.task('html', function(){
  gulp.src(source + '*.html')
    .pipe(minhtml())
    .pipe(gulp.dest(dest));
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
  gulp.src(source + 'js/*.js')
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest(dest +'js'));
});

gulp.task('watch', function() {
  gulp.watch(source + '**/*.js', ['js']); //TODO add js process
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