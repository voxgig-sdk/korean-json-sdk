# KoreanJson SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module KoreanJsonFeatures
  def self.make_feature(name)
    case name
    when "base"
      KoreanJsonBaseFeature.new
    when "test"
      KoreanJsonTestFeature.new
    else
      KoreanJsonBaseFeature.new
    end
  end
end
