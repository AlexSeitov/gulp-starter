import gulp from 'gulp';
import newer from 'gulp-newer';
import { paths } from '../paths.js';

export const images = () => {
  return gulp
    .src(paths.src.webp)
    .pipe(newer(paths.build.images))
    .pipe(gulp.dest(paths.build.images));
};
