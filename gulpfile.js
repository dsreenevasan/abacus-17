var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var flatten = require('gulp-flatten');

gulp.task('sass', function(){
    return gulp.src('client/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'client'
        }
    })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('client/css/*', ['sass']);
    gulp.watch('client/*.html', browserSync.reload);
    gulp.watch('client/js/**/*.js', browserSync.reload);
    // Other watchers
});

gulp.task('useref', function(){
    return gulp.src('client/**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify({ mangle: false })))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('images', function(){
    return gulp.src(['client/images/**/*.+(png|jpg|gif|svg|ico)', 'client/spirit/images/**/*.+(png|jpg|gif|svg|ico)'])
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
    return gulp.src('client/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
});

/*gulp.task('build', ['clean', 'sass', 'useref', 'images', 'fonts'], function (){
 console.log('Building files');
 });*/

gulp.task('jshint', function(){
    return gulp.src('client/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minifiedJs', function(){
    return gulp.src(['client/**/*.min.js'])
        .pipe(flatten())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images', 'fonts'],
        callback
    )
});
