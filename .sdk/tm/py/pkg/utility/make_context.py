# KoreanJson SDK utility: make_context

from projectname_sdk.core.context import KoreanJsonContext


def make_context_util(ctxmap, basectx):
    return KoreanJsonContext(ctxmap, basectx)
