import browserSync from 'browser-sync';
import gulp from 'gulp';
import { htmlValidator } from 'gulp-w3c-html-validator';
import { removeDist } from './gulp/lib/removeDist.js';
import { ttfRemove } from './gulp/lib/ttfRemove.js';
import { buildFolder, paths } from './gulp/paths.js';
import { favicons } from './gulp/tasks/faviconsTask.js';
import { fonts } from './gulp/tasks/fontsTask.js';
import { gifs } from './gulp/tasks/gifsTask.js';
import { html } from './gulp/tasks/htmlTask.js';
import { imagesPng } from './gulp/tasks/imagesPngTask.js';
import { images } from './gulp/tasks/imagesTask.js';
import { imagesToWebp } from './gulp/tasks/imagesToWebpTask.js';
import { scripts } from './gulp/tasks/scriptsTask.js';
import { styles } from './gulp/tasks/stylesTask.js';
import { svg } from './gulp/tasks/svgTask.js';
import { ttfToWoff } from './gulp/tasks/ttfToWoffTask.js';
import { video } from './gulp/tasks/videoTask.js';

export const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: buildFolder
    },
    notify: false,
    port: 3000,
    open: true
  });

  gulp.watch([paths.watch.html], html);
  gulp.watch([paths.watch.css], styles);
  gulp.watch([paths.watch.js], scripts);
};

export const htmlValidation = () => {
  return gulp
    .src(buildFolder + '*.html')
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter());
};

export const dev = gulp.series(ttfToWoff, ttfRemove, imagesToWebp);

export const build = gulp.series(
  removeDist,
  imagesToWebp,
  images,
  gulp.parallel(
    html,
    styles,
    scripts,
    favicons,
    gifs,
    imagesToWebp,
    images,
    imagesPng,
    svg,
    fonts,
    video
  )
  // removeMap
);

export const start = gulp.series(
  removeDist,
  imagesToWebp,
  images,
  gulp.parallel(
    html,
    styles,
    scripts,
    favicons,
    gifs,
    imagesPng,
    svg,
    fonts,
    video,
    watchFiles
  )
);

export const startBuild = gulp.series(gulp.parallel(watchFiles));
