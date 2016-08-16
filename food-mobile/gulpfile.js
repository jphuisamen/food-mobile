const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('symlink-libs', function(){
  return gulp.src('bower_components/*')
    .pipe(gulp.symlink('www/libs'))
})

gulp.task('serve', function(){
  return gulp.src('www')
    .pipe(server({livereload: true}))
})

gulp.task('default', gulp.series('symlink-libs', 'serve'))
