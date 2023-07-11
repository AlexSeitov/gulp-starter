import browserSync from 'browser-sync';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import size from 'gulp-size';
import imageminGifsicle from 'imagemin-gifsicle';
import webpack from 'webpack-stream';
import webpackProdConfig from '../../webpack.prod.js';
import { paths } from '../paths.js';

export const scripts = () => {
  return gulp
    .src(paths.src.js)
    .pipe(webpack(webpackProdConfig))
    .pipe(size({ gzip: true }))
    .pipe(gulp.dest(paths.build.js))
    .pipe(browserSync.stream());
};

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
