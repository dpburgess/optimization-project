var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var inlineCss = require('gulp-inline-css');

/*gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});*/

//gulp task to compile css to sass
/*gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});*/

/*<!--build:js js/main.min.js -->
<script src="js/lib/a-library.js"></script>
<script src="js/lib/another-library.js"></script>
<script src="js/main.js"></script>
<!-- endbuild -->*/


/*gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(uglify()) // Uglifies Javascript files
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});*/


gulp.task('images', function(){
  return gulp.src('img/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dest/'))
});

gulp.task('inline', function() {
    return gulp.src('index.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dest/'));
});