import gulp from 'gulp';
import imagemin, { mozjpeg } from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import { paths } from '../paths.js';

export const imagesToWebp = () => {
  return gulp
    .src(paths.src.originalImages)
    .pipe(newer(paths.src.originalImages))
    .pipe(imagemin([mozjpeg({ quality: 70, progressive: true })]))
    .pipe(webp())
    .pipe(gulp.dest(paths.src.images));
};
