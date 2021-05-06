const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

exports.scss = function() {
  return gulp
    .src('src/**/*.scss')
    .pipe(gulp.dest('es'))
    .pipe(gulp.dest('lib'));
};

exports.lib = function() {
  const plugins = [
    autoprefixer(),
    cssnano(),
  ];
  return gulp
    .src('src/styles/lib.scss', { base: 'src/styles' })
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('es'))
    .pipe(gulp.dest('lib'));
};
