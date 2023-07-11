import gulp from 'gulp';
import imagemin, { optipng } from 'gulp-imagemin';
import newer from 'gulp-newer';
import { paths } from '../paths.js';

export const imagesPng = () => {
  return gulp
    .src(paths.src.imagesPng)
    .pipe(newer(paths.build.images))
    .pipe(imagemin([optipng({ optimizationLevel: 5 })]))
    .pipe(gulp.dest(paths.build.images));
};
