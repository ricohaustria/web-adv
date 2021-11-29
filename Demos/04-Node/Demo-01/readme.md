# Using Node as a Dev Tool

[npm CLI Documentation](https://docs.npmjs.com/cli-documentation/)

## Tools installation

- Use Node.js 10.x
- Use Webpack 4.x and webpack-cli

```
nvm install 10.24.1
nvm use 10.24.1
npm i -g webpack@4.44.2 webpack-cli gulp gulp-cli
```

## Gulp

[Gulp.js](https://gulpjs.com/)

Run a gulp task: 

```
gulp babel
gulp compile-sass
```

## Webpack

[Webpack](https://webpack.js.org/)

Run webpack: 

```
webpack
```
> Note: Uses `webpack.config.js` by default

## Auditing Security Issues

[npm audit](https://docs.npmjs.com/cli/audit.html)

![audit](_images/npm-audit.png)