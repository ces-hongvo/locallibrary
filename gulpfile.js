const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');

gulp.task('default', () => {
  gulp.src('catalog/static/images/*')
    .pipe(imagemin([
        pngquant({quality: '50'}),
        mozjpeg({quality: '50'})
    ]))
    .pipe(gulp.dest('catalog/static/compressed_images/'))
});