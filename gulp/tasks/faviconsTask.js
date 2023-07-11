import gulp from 'gulp';
import gulpFavicons from 'gulp-favicons';
import newer from 'gulp-newer';
import { paths } from '../paths.js';

export const favicons = () => {
  return gulp
    .src(paths.src.favicon)
    .pipe(newer(paths.build.images))
    .pipe(gulp.dest(paths.build.favicons))
    .pipe(
      gulpFavicons({
        paths: paths.src.favicons,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          favicons: true,
          windows: true,
          yandex: false,
          coast: false,
          firefox: false
        }
      })
    )
    .pipe(gulp.dest(paths.build.favicons));
};
