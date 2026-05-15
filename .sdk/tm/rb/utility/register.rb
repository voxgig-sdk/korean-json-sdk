# KoreanJson SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

KoreanJsonUtility.registrar = ->(u) {
  u.clean = KoreanJsonUtilities::Clean
  u.done = KoreanJsonUtilities::Done
  u.make_error = KoreanJsonUtilities::MakeError
  u.feature_add = KoreanJsonUtilities::FeatureAdd
  u.feature_hook = KoreanJsonUtilities::FeatureHook
  u.feature_init = KoreanJsonUtilities::FeatureInit
  u.fetcher = KoreanJsonUtilities::Fetcher
  u.make_fetch_def = KoreanJsonUtilities::MakeFetchDef
  u.make_context = KoreanJsonUtilities::MakeContext
  u.make_options = KoreanJsonUtilities::MakeOptions
  u.make_request = KoreanJsonUtilities::MakeRequest
  u.make_response = KoreanJsonUtilities::MakeResponse
  u.make_result = KoreanJsonUtilities::MakeResult
  u.make_point = KoreanJsonUtilities::MakePoint
  u.make_spec = KoreanJsonUtilities::MakeSpec
  u.make_url = KoreanJsonUtilities::MakeUrl
  u.param = KoreanJsonUtilities::Param
  u.prepare_auth = KoreanJsonUtilities::PrepareAuth
  u.prepare_body = KoreanJsonUtilities::PrepareBody
  u.prepare_headers = KoreanJsonUtilities::PrepareHeaders
  u.prepare_method = KoreanJsonUtilities::PrepareMethod
  u.prepare_params = KoreanJsonUtilities::PrepareParams
  u.prepare_path = KoreanJsonUtilities::PreparePath
  u.prepare_query = KoreanJsonUtilities::PrepareQuery
  u.result_basic = KoreanJsonUtilities::ResultBasic
  u.result_body = KoreanJsonUtilities::ResultBody
  u.result_headers = KoreanJsonUtilities::ResultHeaders
  u.transform_request = KoreanJsonUtilities::TransformRequest
  u.transform_response = KoreanJsonUtilities::TransformResponse
}
