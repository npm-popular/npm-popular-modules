# npm-popular-modules

[![Build Status](https://travis-ci.org/ZYSzys/npm-popular-modules.svg?branch=master)](https://travis-ci.org/ZYSzys/npm-popular-modules)
[![codecov](https://codecov.io/gh/ZYSzys/npm-popular-modules/badge.svg?branch=master)](https://codecov.io/gh/ZYSzys/npm-popular-modules?branch=master)
[![NPM version](https://img.shields.io/npm/v/npm-popular-modules.svg?style=flat)](https://npmjs.com/package/npm-popular-modules)
[![NPM downloads](https://img.shields.io/npm/dm/npm-popular-modules.svg?style=flat)](https://npmjs.com/package/npm-popular-modules)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ZYSzys/npm-popular-modules.svg)](https://github.com/ZYSzys/npm-popular-modules/blob/master/LICENSE)

> Get popular libraries from npmjs.com


## Install

```sh
$ npm install npm-popular-modules
```


## Usage

```js
const npmPopular = require('npm-popular-modules')

(async () => {
  const list = await npmPopular()
  console.log(list)
})()
//[ { name: 'browserify',
//    url: 'npmjs.com/package/browserify',
//    homepage: 'https://github.com/browserify/browserify#readme',
//    github: 'https://github.com/browserify/browserify' },
//. ... ]
```

## Related

- [npm-popular](https://github.com/ZYSzys/npm-popular) A website for getting popular node modules.
- [npm-popular-modules-cli](https://github.com/ZYSzys/npm-popular-modules-cli) CLI for the module.

## License

MIT © [ZYSzys](http://zyszys.top)
