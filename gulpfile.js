const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const broswerSync = require('browser-sync').create()

function style() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(broswerSync.stream())
}

function watch() {
    broswerSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./sass/**/*.scss', style)
    gulp.watch('./*.html').on('change', broswerSync.reload)
    gulp.watch('./js/**/*.js').on('change', broswerSync.reload)
}

exports.style = style
exports.watch = watch