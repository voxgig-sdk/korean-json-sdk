<?php
declare(strict_types=1);

// KoreanJson SDK utility: feature_add

class KoreanJsonFeatureAdd
{
    public static function call(KoreanJsonContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
