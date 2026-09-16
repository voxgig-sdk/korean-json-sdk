# KoreanJson SDK feature factory

from koreanjson_sdk.feature.base_feature import KoreanJsonBaseFeature
from koreanjson_sdk.feature.ratelimit_feature import KoreanJsonRatelimitFeature
from koreanjson_sdk.feature.retry_feature import KoreanJsonRetryFeature
from koreanjson_sdk.feature.test_feature import KoreanJsonTestFeature
from koreanjson_sdk.feature.timeout_feature import KoreanJsonTimeoutFeature


_FEATURES = {
    "base": lambda: KoreanJsonBaseFeature(),
    "ratelimit": lambda: KoreanJsonRatelimitFeature(),
    "retry": lambda: KoreanJsonRetryFeature(),
    "test": lambda: KoreanJsonTestFeature(),
    "timeout": lambda: KoreanJsonTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
