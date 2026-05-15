<?php
declare(strict_types=1);

// KoreanJson SDK utility: result_headers

class KoreanJsonResultHeaders
{
    public static function call(KoreanJsonContext $ctx): ?KoreanJsonResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
