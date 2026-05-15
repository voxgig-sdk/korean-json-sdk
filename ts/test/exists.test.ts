
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KoreanJsonSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KoreanJsonSDK.test()
    equal(null !== testsdk, true)
  })

})
