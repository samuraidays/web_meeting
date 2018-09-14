var gulp         = require('gulp');
var browserSync  = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./",
          index: "index_voice.html"
      }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch("./*.html", ['bs-reload']);
  gulp.watch("./css/*.css", ['bs-reload']);
  gulp.watch("./js/*.js", ['bs-reload']);
});