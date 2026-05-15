-- KoreanJson SDK error

local KoreanJsonError = {}
KoreanJsonError.__index = KoreanJsonError


function KoreanJsonError.new(code, msg, ctx)
  local self = setmetatable({}, KoreanJsonError)
  self.is_sdk_error = true
  self.sdk = "KoreanJson"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function KoreanJsonError:error()
  return self.msg
end


function KoreanJsonError:__tostring()
  return self.msg
end


return KoreanJsonError
