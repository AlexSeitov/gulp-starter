import gulp from 'gulp';
import newer from 'gulp-newer';
import svgmin from 'gulp-svgmin';
import { paths } from '../paths.js';

export const svg = () => {
  return gulp
    .src(paths.src.svg)
    .pipe(newer(paths.build.images))
    .pipe(svgmin())
    .pipe(gulp.dest(paths.build.images));
};
