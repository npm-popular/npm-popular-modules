# npm-popular-modules

[![Build Status](https://travis-ci.org/ZYSzys/npm-popular-modules.svg?branch=master)](https://travis-ci.org/ZYSzys/npm-popular-modules)
[![codecov](https://codecov.io/gh/ZYSzys/npm-popular-modules/badge.svg?branch=master)](https://codecov.io/gh/ZYSzys/npm-popular-modules?branch=master)
[![NPM version](https://img.shields.io/npm/v/npm-popular-modules.svg?style=flat)](https://npmjs.com/package/npm-popular-modules)
[![NPM downloads](https://img.shields.io/npm/dm/npm-popular-modules.svg?style=flat)](https://npmjs.com/package/npm-popular-modules)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![license](https://img.shields.io/github/license/ZYSzys/npm-popular-modules.svg)](https://github.com/ZYSzys/npm-popular-modules/blob/master/LICENSE)

> Get popular libraries from npmjs.com


## Install

### CLI
```sh
$ npm install -g npm-popular-modules
```

### As module
```sh
$ npm install npm-popular-modules
```


## Usage

### CLI
```sh
$ npm-popular-modules
# => Write into Popular successfully.
```

### As module
```js
const npmPopular = require('npm-popular-modules')

(async () => {
  const list = await npmPopular()
  console.log(list)
})()
// => [ { name: 'browserify', url: 'npmjs.com/package/browserify' },
//      ...]
```







## License

MIT © [ZYSzys](http://zyszys.top)
