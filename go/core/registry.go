package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCommentEntityFunc func(client *KoreanJsonSDK, entopts map[string]any) KoreanJsonEntity

var NewPostEntityFunc func(client *KoreanJsonSDK, entopts map[string]any) KoreanJsonEntity

var NewTodoEntityFunc func(client *KoreanJsonSDK, entopts map[string]any) KoreanJsonEntity

var NewUserEntityFunc func(client *KoreanJsonSDK, entopts map[string]any) KoreanJsonEntity

