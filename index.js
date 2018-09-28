'use strict'

const got = require('got')
const cheerio = require('cheerio')

const npmPopular = async () => {
  try {
    const res = await got('npmjs.com')
    return parseBody(res.body)
  } catch (e) {
    console.log(e.response.body)
  }
}

const parseBody = (body) => {
  const $ = cheerio.load(body)
  const libArray = $('.marginalia-container').find('h3')

  const list = []
  libArray.each((index, el) => {
    const item = $(el).find('a')
    const name = item.text()
    const url = `npmjs.com${item.attr('href')}`

    list.push({ name, url })
  })

  return list
}

module.exports = npmPopular
