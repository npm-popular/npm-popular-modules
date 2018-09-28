import test from 'ava'
import npmPopular from '.'

test('get npm list', async t => {
  const res = await npmPopular()
  t.is(Array.isArray(res), true)
})
