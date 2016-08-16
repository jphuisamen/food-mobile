const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('default', function(cb){
  return gulp.src('www')
    .pipe(server({livereload: true}))
  console.log('default task')
  cb()
})
