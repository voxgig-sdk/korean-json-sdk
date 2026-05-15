<?php
declare(strict_types=1);

// KoreanJson SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class KoreanJsonFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new KoreanJsonBaseFeature();
            case "test":
                return new KoreanJsonTestFeature();
            default:
                return new KoreanJsonBaseFeature();
        }
    }
}
