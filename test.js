import test from 'ava'
import npmPopular from '.'

test('title', async t => {
  const res = await npmPopular()
  t.is(res, undefined)
})
