//Variables
var gulp = require('gulp');
var settings = require('./settings');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var rename = require('gulp-rename');

// var webpack = require('webpack');


//Create Sass task
gulp.task('styles', function () {
    return gulp.src(settings.themeLocation + 'sass/main.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .on('error', sass.logError)
        .pipe(gulp.dest(settings.themeLocation));
});



gulp.task('watch', function () {

    console.log(settings.themeLocation + 'sass/**/*.scss');

    browserSync.init({
        notify: true,
        proxy: settings.urlToPreview,
        ghostmode: false

    });

    gulp.watch('./app/wp-content/**/*.php', function () {
        browserSync.reload();
        //console.log(settings.themeLocation + 'sass/**/*.scss');
    });



    gulp.watch(settings.themeLocation + 'sass/**/*.scss', ['waitForStyles']);




    //gulp.watch([settings.themeLocation + 'js/modules/*.js', settings.themeLocation + 'js/modules/*.js'], ['waitForScripts']);
});

gulp.task('waitForStyles', ['styles'], function () {
    return gulp.src(settings.themeLocation)
        .pipe(browserSync.stream());
})

// gulp.task('waitForScripts', ['scripts'], function() {
//     browserSync.reload();
// })





//This is code for scripts with webpack but I don't understand it yet

// gulp.task('scripts', function(callback) {
//     webpack(require('./webpack.config.js'), function(err, stats) {
//         if (err) {
//             console.log(err.toString());
//         }

//         console.log(stats.toString());
//         callback();
//     });
// });