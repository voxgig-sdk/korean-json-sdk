<?php
declare(strict_types=1);

// KoreanJson SDK base feature

class KoreanJsonBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(KoreanJsonContext $ctx, array $options): void {}
    public function PostConstruct(KoreanJsonContext $ctx): void {}
    public function PostConstructEntity(KoreanJsonContext $ctx): void {}
    public function SetData(KoreanJsonContext $ctx): void {}
    public function GetData(KoreanJsonContext $ctx): void {}
    public function GetMatch(KoreanJsonContext $ctx): void {}
    public function SetMatch(KoreanJsonContext $ctx): void {}
    public function PrePoint(KoreanJsonContext $ctx): void {}
    public function PreSpec(KoreanJsonContext $ctx): void {}
    public function PreRequest(KoreanJsonContext $ctx): void {}
    public function PreResponse(KoreanJsonContext $ctx): void {}
    public function PreResult(KoreanJsonContext $ctx): void {}
    public function PreDone(KoreanJsonContext $ctx): void {}
    public function PreUnexpected(KoreanJsonContext $ctx): void {}
}
