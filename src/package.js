'use strict';

const got = require('got');
const cheerio = require('cheerio');

/**
 * Parse npmjs.com/{package urll} to extract urls for each package
 *
 * @param {String} url
 *
 * return {homepage: ..., github: ...}
 */
const parsePackage = async url => {
  try {
    const res = await got(url);
    const $ = cheerio.load(res.body);
    const urls = $('.package__rightSidebar___9dMXo').find(
      '.package__sidebarLink___zE7yA'
    );

    const list = [];
    urls.each((index, url) => {
      list.push(url.attribs.href);
    });

    return Object.assign(
      {},
      {
        homepage: list[0],
        github: list[1]
      }
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = parsePackage;
