import { existsSync } from 'fs';
import gulp from 'gulp';
import { paths } from '../paths.js';

export const video = (done) => {
  if (existsSync(paths.src.video)) {
    return gulp.src(paths.src.video).pipe(gulp.dest(paths.build.video));
  }
  return done();
};
