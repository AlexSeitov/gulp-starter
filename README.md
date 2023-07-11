## Usage

### Clone repo

```
git clone https://github.com/AlexSeitov/gulp-starter.git
```

### Install pnpm

```
npm install -g pnpm
```

### Install

```
pnpm install
```

### Run

```
pnpm dev
```

### Build

```
pnpm build
```

### The starter includes:

##### features:

- [husky](https://typicode.github.io/husky/#/) - run linter scripts when you commit to git
- [prettier](https://prettier.io/docs/en/index.html) - code formatter
- [html validator](https://github.com/center-key/gulp-w3c-html-validator)
- [sass](https://sass-lang.com/documentation) (scss syntax), functions to calculate rem, percent, line-height
- [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
- [normalize](https://necolas.github.io/normalize.css/)
- [ttf to woff2](https://github.com/nfroidure/gulp-ttf2woff2)
- [jpg to webp](https://github.com/sindresorhus/gulp-webp)
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin), [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin), [imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle) - image compression
- [webpack dev server](https://webpack.js.org/configuration/dev-server/)
- [gulp-favicons](https://github.com/rejas/gulp-favicons)
- vanilla javascript, es6 modules
- mixin font-face

##### linters:

- [htmlhint](https://htmlhint.com/docs/user-guide/getting-started)
- [stylelint](https://stylelint.io/)
- [eslint](https://eslint.org/)

##### jS features (html includes 'src/html/UI'):

- [swiper slider](https://swiperjs.com/get-started)
- [tabbis tabs](https://github.com/jenstornell/tabbis.js)
- accordion
- smoothscroll
- [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) for safari support
- burger button

##### Remark :warning:
- run html validation for files located in the dist folder, after pnpm build command