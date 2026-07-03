package voxgigkoreanjsonsdk

import (
	"github.com/voxgig-sdk/korean-json-sdk/go/core"
	"github.com/voxgig-sdk/korean-json-sdk/go/entity"
	"github.com/voxgig-sdk/korean-json-sdk/go/feature"
	_ "github.com/voxgig-sdk/korean-json-sdk/go/utility"
)

// Type aliases preserve external API.
type KoreanJsonSDK = core.KoreanJsonSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type KoreanJsonEntity = core.KoreanJsonEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type KoreanJsonError = core.KoreanJsonError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCommentEntityFunc = func(client *core.KoreanJsonSDK, entopts map[string]any) core.KoreanJsonEntity {
		return entity.NewCommentEntity(client, entopts)
	}
	core.NewPostEntityFunc = func(client *core.KoreanJsonSDK, entopts map[string]any) core.KoreanJsonEntity {
		return entity.NewPostEntity(client, entopts)
	}
	core.NewTodoEntityFunc = func(client *core.KoreanJsonSDK, entopts map[string]any) core.KoreanJsonEntity {
		return entity.NewTodoEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.KoreanJsonSDK, entopts map[string]any) core.KoreanJsonEntity {
		return entity.NewUserEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewKoreanJsonSDK = core.NewKoreanJsonSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewKoreanJsonSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *KoreanJsonSDK  { return NewKoreanJsonSDK(nil) }
func Test() *KoreanJsonSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
