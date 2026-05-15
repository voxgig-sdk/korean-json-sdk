# KoreanJson SDK feature factory

from feature.base_feature import KoreanJsonBaseFeature
from feature.test_feature import KoreanJsonTestFeature


def _make_feature(name):
    features = {
        "base": lambda: KoreanJsonBaseFeature(),
        "test": lambda: KoreanJsonTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
