const gulp = require('gulp'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      source = require('vinyl-source-stream'),
      runSequence = require('run-sequence');

gulp.task('browserify',function(){
  return browserify({
    entries: 'public/javascripts/src/main.js',
    extensions: ['.jsx'],
    debug: true
  }).transform(babelify,{ presets:['es2015','react']})
    .bundle()
    .pipe(source('sachin.js'))
    .pipe(gulp.dest('public/javascripts/dist/js'))
});

gulp.task('default',function(cb){
  runSequence('browserify',cb);
});
