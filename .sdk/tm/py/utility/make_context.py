# KoreanJson SDK utility: make_context

from core.context import KoreanJsonContext


def make_context_util(ctxmap, basectx):
    return KoreanJsonContext(ctxmap, basectx)
