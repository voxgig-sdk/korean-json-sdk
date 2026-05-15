<?php
declare(strict_types=1);

// KoreanJson SDK utility: result_body

class KoreanJsonResultBody
{
    public static function call(KoreanJsonContext $ctx): ?KoreanJsonResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
