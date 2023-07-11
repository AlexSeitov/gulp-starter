import gulp from 'gulp';
import ttf2woff2 from 'gulp-ttf2woff2';
import { paths } from '../paths.js';

export const ttfToWoff = () => {
  return gulp
    .src(`${paths.src.fonts}/*.ttf`)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(paths.src.fonts));
};
