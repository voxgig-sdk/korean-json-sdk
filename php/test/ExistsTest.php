<?php
declare(strict_types=1);

// KoreanJson SDK exists test

require_once __DIR__ . '/../koreanjson_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = KoreanJsonSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
