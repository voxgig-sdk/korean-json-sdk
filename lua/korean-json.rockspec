package = "voxgig-sdk-korean-json"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/korean-json-sdk.git"
}
description = {
  summary = "KoreanJson SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["korean-json_sdk"] = "korean-json_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
