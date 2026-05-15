# KoreanJson SDK utility: make_context
require_relative '../core/context'
module KoreanJsonUtilities
  MakeContext = ->(ctxmap, basectx) {
    KoreanJsonContext.new(ctxmap, basectx)
  }
end
