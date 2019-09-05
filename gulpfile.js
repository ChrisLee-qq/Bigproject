const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
gulp.task('sass', () => {
    gulp.src('./src/sass/*.css').pipe(sass()).pipe(cssnano()).pipe(rename({ suffix: '.min' })).pipe(gulp.dest('./dist/css'));
})
gulp.task('js', () => {
    gulp.src('./src/js/*.js').pipe(uglify()).pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/js'));
})
gulp.task('img', () => {
    gulp.src('./src/img/*').pipe(imagemin()).pipe(gulp.dest('./dist/img'));
})
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.css',['sass']);
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/img/*',['img']);
})