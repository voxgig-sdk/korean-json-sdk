# ProjectName SDK exists test

import pytest
from koreanjson_sdk import KoreanJsonSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = KoreanJsonSDK.test(None, None)
        assert testsdk is not None
