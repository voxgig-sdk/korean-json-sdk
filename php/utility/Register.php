<?php
declare(strict_types=1);

// KoreanJson SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

KoreanJsonUtility::setRegistrar(function (KoreanJsonUtility $u): void {
    $u->clean = [KoreanJsonClean::class, 'call'];
    $u->done = [KoreanJsonDone::class, 'call'];
    $u->make_error = [KoreanJsonMakeError::class, 'call'];
    $u->feature_add = [KoreanJsonFeatureAdd::class, 'call'];
    $u->feature_hook = [KoreanJsonFeatureHook::class, 'call'];
    $u->feature_init = [KoreanJsonFeatureInit::class, 'call'];
    $u->fetcher = [KoreanJsonFetcher::class, 'call'];
    $u->make_fetch_def = [KoreanJsonMakeFetchDef::class, 'call'];
    $u->make_context = [KoreanJsonMakeContext::class, 'call'];
    $u->make_options = [KoreanJsonMakeOptions::class, 'call'];
    $u->make_request = [KoreanJsonMakeRequest::class, 'call'];
    $u->make_response = [KoreanJsonMakeResponse::class, 'call'];
    $u->make_result = [KoreanJsonMakeResult::class, 'call'];
    $u->make_point = [KoreanJsonMakePoint::class, 'call'];
    $u->make_spec = [KoreanJsonMakeSpec::class, 'call'];
    $u->make_url = [KoreanJsonMakeUrl::class, 'call'];
    $u->param = [KoreanJsonParam::class, 'call'];
    $u->prepare_auth = [KoreanJsonPrepareAuth::class, 'call'];
    $u->prepare_body = [KoreanJsonPrepareBody::class, 'call'];
    $u->prepare_headers = [KoreanJsonPrepareHeaders::class, 'call'];
    $u->prepare_method = [KoreanJsonPrepareMethod::class, 'call'];
    $u->prepare_params = [KoreanJsonPrepareParams::class, 'call'];
    $u->prepare_path = [KoreanJsonPreparePath::class, 'call'];
    $u->prepare_query = [KoreanJsonPrepareQuery::class, 'call'];
    $u->result_basic = [KoreanJsonResultBasic::class, 'call'];
    $u->result_body = [KoreanJsonResultBody::class, 'call'];
    $u->result_headers = [KoreanJsonResultHeaders::class, 'call'];
    $u->transform_request = [KoreanJsonTransformRequest::class, 'call'];
    $u->transform_response = [KoreanJsonTransformResponse::class, 'call'];
});
