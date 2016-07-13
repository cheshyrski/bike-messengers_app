//
// ******* Configuration and loading third party components *******
//

/**
 * Load required components
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var vinylPaths = require('vinyl-paths');
var del = require('del');
var concat = require('gulp-concat');
var minifyCss = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var path = require('path');
var ngAnnotate = require('gulp-ng-annotate');
var minifyHtml = require('gulp-htmlmin');
var ngHtml2Js = require('gulp-ng-html2js');
//var templateCache = require('gulp-angular-templatecache');
var merge2 = require('merge2');
var runSequence = require('run-sequence');
var moduleImporter = require('sass-module-importer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

//
// ******* Tasks *******
//

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Bike_messengers"
};

gulp.task('webserver', function() {
    browserSync(config);
});

/**
 * Clean build directory
 */
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(vinylPaths(del));
});

/**
 * Build vendor.css (include all vendor css files)
 */
gulp.task('vendor.css', function() {
    return gulp.src([
            'src/bower_components/normalize-css/normalize.css',
            'src/bower_components/bootstrap/dist/css/bootstrap.css',
            'src/bower_components/angular-material/angular-material.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

/**
 * Build vendor.js (include all vendor js files)
 */
gulp.task('vendor.js', function() {
    return gulp.src([
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-route/angular-route.js',
            'src/bower_components/angular-aria/angular-aria.js',
            'src/bower_components/angular-animate/angular-animate.js',
            'src/bower_components/angular-material/angular-material.js',
            'src/bower_components/jquery/dist/jquery.js',
            'src/bower_components/bootstrap/dist/js/bootstrap.js',
            'src/bower_components/angular-bootstrap/ui-bootstrap.js',
            'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'src/bower_components/angularbknd-sdk/dist/backand.min.js',
            'node_modules/socket.io/node_modules/socket.io-client/socket.io.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

/**
 * Build app.css (include all project css files)
 */
gulp.task('app.css', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ importer: moduleImporter() }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({ stream: true }));
});

/**
 * Build app.js (include all project js files and templates)
 */
gulp.task('app.js', function() {
    var js = gulp.src([
            'src/app/app.js',
            'src/app/app.routes.js',
            'src/app/**/*.js'
        ])
        .pipe(ngAnnotate());

    var templates = gulp.src('src/app/**/*.tpl.html')
        .pipe(minifyHtml({
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        }))
        .pipe(ngHtml2Js({
            moduleName: 'messengers-app.templates'
        }));

    return merge2(js, templates)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({ stream: true }));
});

/**
 * Build index.html for ordinary use
 */
gulp.task('index.html', function() {
    return gulp.src('src/index.html')
        .pipe(minifyHtml({
            removeComments: true,
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(reload({ stream: true }));
});

gulp.task('images', function() {
    gulp.src('src/images/**/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/images'))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts', function() {
    gulp.src([
        'src/fonts/**/*.*',
        'src/bower_components/bootstrap/dist/fonts/*.*'
        ])
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('watch', function() {
    watch(['src/index.html'], function(event, cb) {
        gulp.start('index.html');
    });
    watch(['src/scss/**/*.scss'], function(event, cb) {
        gulp.start('app.css');
    });
    watch([
        'src/app/app.js',
        'src/app/app.routes.js',
        'src/app/**/*.js'
    ], function(event, cb) {
        gulp.start('app.js');
    });
    watch(['src/images/**/*.*'], function(event, cb) {
        gulp.start('images');
    });
    watch(['src/fonts/**/*.*'], function(event, cb) {
        gulp.start('fonts');
    });
});

//
// ******* Task chains *******
//

/**
 * Default task
 */

gulp.task('default', function(next) {
    runSequence('clean', ['vendor.css', 'vendor.js'], ['app.css', 'app.js'], 'images', 'fonts', 'index.html', 'webserver', 'watch', next);
});
