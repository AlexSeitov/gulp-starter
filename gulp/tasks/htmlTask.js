import browserSync from 'browser-sync';
import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlbeautify from 'gulp-html-beautify';
import htmlmin from 'gulp-htmlmin';
import { buildFolder, paths } from '../paths.js';

export const html = () => {
  return gulp
    .src(paths.src.html)
    .pipe(fileinclude({ prefix: '@@' }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true
      })
    )
    .pipe(htmlbeautify({ indent_size: 2 }))
    .pipe(gulp.dest(buildFolder))
    .pipe(browserSync.stream());
};
