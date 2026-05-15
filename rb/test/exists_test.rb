# KoreanJson SDK exists test

require "minitest/autorun"
require_relative "../KoreanJson_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = KoreanJsonSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
