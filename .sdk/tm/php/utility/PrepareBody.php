<?php
declare(strict_types=1);

// KoreanJson SDK utility: prepare_body

class KoreanJsonPrepareBody
{
    public static function call(KoreanJsonContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
