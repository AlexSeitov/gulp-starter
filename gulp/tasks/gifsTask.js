import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import imageminGifsicle from 'imagemin-gifsicle';
import { paths } from '../paths.js';

export const gifs = () => {
  return gulp
    .src(paths.src.gifs)
    .pipe(newer(paths.build.images))
    .pipe(
      imagemin([imageminGifsicle({ optimizationLevel: 2 })], {
        verbose: true
      })
    )
    .pipe(gulp.dest(paths.build.images));
};
