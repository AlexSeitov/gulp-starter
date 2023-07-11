import browserSync from 'browser-sync';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gcmq from 'gulp-group-css-media-queries';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import { paths } from '../paths.js';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import { isDev, isBuild } from '../modeVariables.js';

const sass = gulpSass(dartSass);

export const styles = () => {
  return gulp
    .src(paths.src.css)
    .pipe(gulpif(isDev, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(autoprefixer())
    .pipe(
      rename((path) => {
        const str = path;
        str.basename += '.styles';
      })
    )
    .pipe(gulpif(isBuild, cleanCSS()))
    .pipe(gulpif(isDev, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.build.css))
    .pipe(browserSync.stream());
};
