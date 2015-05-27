var gulp = require('gulp'),
  browserify = require('browserify'),
  browserifyShim = require('browserify-shim'),
  source = require('vinyl-source-stream'),
  connect = require('gulp-connect')

/* Views */
gulp.task('views', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

/* Scripts */
gulp.task('scripts-main', function() {
  return browserify('./src/main.js', {
      debug: true
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

// Scripts Vendor
gulp.task('scripts-vendor', function() {
  return browserify('./src/vendor.js', {
      debug: true
    })
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

gulp.task('scripts', ['scripts-vendor', 'scripts-main'])

// CSS
gulp.task('styles', function() {
  return gulp.src('./src/**/*.css')
    .pipe(gulp.dest('./dist'))
})

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./dist/fonts'))
})

// Server
gulp.task('server', ['build'], function() {
  connect.server({
    root: './dist',
    livereload: true
  })
})


gulp.task('watch', function() {
  gulp.watch('./src/vendor.js', ['scripts-vendor'])
  gulp.watch('./src/main.js', ['scripts-main'])
  gulp.watch('./src/index.html', ['views'])
})

gulp.task('build', ['styles', 'views', 'fonts'])

gulp.task('default', ['server', 'watch'])