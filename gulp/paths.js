export const sourceFolder = 'src/';
export const buildFolder = 'dist/';

export const paths = {
  src: {
    html: sourceFolder + 'html/*.html',
    css: sourceFolder + 'styles/*.scss',
    js: sourceFolder + 'scripts/index.js',
    gifs: sourceFolder + 'images/**/*.gif',
    originalImages: sourceFolder + 'images/**/*.{jpg,jpeg}',
    webp: sourceFolder + 'images/**/*.webp',
    images: sourceFolder + 'images/',
    imagesPng: sourceFolder + 'images/**/*.png',
    svg: sourceFolder + 'images/**/*.svg',
    favicon: sourceFolder + 'images/favicon.svg',
    fonts: sourceFolder + 'fonts',
    woffFonts: sourceFolder + 'fonts/*.woff2',
    video: sourceFolder + 'video'
  },
  build: {
    css: buildFolder + 'css',
    js: buildFolder + 'js',
    images: buildFolder + 'images',
    favicons: buildFolder + 'favicons',
    fonts: buildFolder + 'fonts',
    video: buildFolder
  },
  watch: {
    html: sourceFolder + '**/*.html',
    css: sourceFolder + 'styles/**/*.scss',
    js: sourceFolder + 'scripts/**/*.js'
  },
  cleanFolder: buildFolder,
  cleanMap: buildFolder + '**/*.map'
};
