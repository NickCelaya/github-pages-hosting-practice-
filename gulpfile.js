var gulp = require("gulp")
 , sourcemaps = require("gulp-sourcemaps")
 , sass = require("gulp-sass")
 , CacheBuster = require("gulp-cachebust")
 , concat = require("gulp-concat")
 , print = require("gulp-print")
 , babel = require("gulp-babel")
 , uglify = require("gulp-uglify")

 var cachebust = new CacheBuster();



 gulp.task('build-img', function(){
   return gulp.src('./img/*')
  //  .pipe(cachebust.resources())
   .pipe(gulp.dest('./dist/img'));
 })


gulp.task("build-css", function(){
  return gulp.src("./styles/*")
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(cachebust.resources())
          .pipe(concat("styles.css"))
          .pipe(sourcemaps.write("./maps"))
          .pipe(gulp.dest("./dist"));
});



gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});



gulp.task('build', ['build-css', 'build-js', 'build-img'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});
