<<<<<<< HEAD
var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('default', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
=======
var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('default', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./app/**/*.js', './app/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
>>>>>>> 70465adc07f8abda15b75f39434d74f1a934f4ac
});