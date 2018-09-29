'use strict';

const got = require('got');
const cheerio = require('cheerio');

/**
 * Parse npmjs.com to extract popular packages list
 *
 * @param {String} url
 */
const parseNpm = async url => {
  try {
    const res = await got(url);
    const $ = cheerio.load(res.body);
    const libArray = $('.marginalia-container').find('h3');

    const list = [];
    libArray.each((index, el) => {
      const item = $(el).find('a');
      const name = item.text();
      const url = `npmjs.com${item.attr('href')}`;

      list.push({ name, url });
    });

    return list;
  } catch (e) {
    console.log(e);
  }
};

module.exports = parseNpm;
