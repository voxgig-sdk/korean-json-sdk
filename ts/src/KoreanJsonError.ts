
import { Context } from './Context'


class KoreanJsonError extends Error {

  isKoreanJsonError = true

  sdk = 'KoreanJson'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  KoreanJsonError
}

