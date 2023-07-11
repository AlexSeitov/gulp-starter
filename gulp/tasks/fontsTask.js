import gulp from 'gulp';
import { paths } from '../paths.js';

export const fonts = () => {
  return gulp.src(paths.src.woffFonts).pipe(gulp.dest(paths.build.fonts));
};
