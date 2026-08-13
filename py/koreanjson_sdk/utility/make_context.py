# KoreanJson SDK utility: make_context

from koreanjson_sdk.core.context import KoreanJsonContext


def make_context_util(ctxmap, basectx):
    return KoreanJsonContext(ctxmap, basectx)
