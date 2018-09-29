'use strict';

const got = require('got');
const cheerio = require('cheerio');

const parseNpm = require('./npm');
const parsePackage = require('./package');

/**
 * Extract popular packages list
 */
const npmPopular = async () => {
  try {
    const homeList = await parseNpm('npmjs.com');
    for (const pkg of homeList) {
      try {
        const urls = await parsePackage(pkg.url);
        Object.assign(pkg, urls);
      } catch (e) {
        console.log(e);
      }
    }
    return homeList;
  } catch (e) {
    console.log(e);
  }
};

module.exports = npmPopular;
