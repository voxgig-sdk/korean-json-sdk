# KoreanJson SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module KoreanJsonFeatures
  def self.make_feature(name)
    case name
    when "base"
      KoreanJsonBaseFeature.new
    when "ratelimit"
      KoreanJsonRatelimitFeature.new
    when "retry"
      KoreanJsonRetryFeature.new
    when "test"
      KoreanJsonTestFeature.new
    when "timeout"
      KoreanJsonTimeoutFeature.new
    else
      KoreanJsonBaseFeature.new
    end
  end
end
