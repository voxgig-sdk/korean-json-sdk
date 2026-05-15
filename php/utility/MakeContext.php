<?php
declare(strict_types=1);

// KoreanJson SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class KoreanJsonMakeContext
{
    public static function call(array $ctxmap, ?KoreanJsonContext $basectx): KoreanJsonContext
    {
        return new KoreanJsonContext($ctxmap, $basectx);
    }
}
