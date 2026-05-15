package core

type KoreanJsonError struct {
	IsKoreanJsonError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKoreanJsonError(code string, msg string, ctx *Context) *KoreanJsonError {
	return &KoreanJsonError{
		IsKoreanJsonError: true,
		Sdk:              "KoreanJson",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KoreanJsonError) Error() string {
	return e.Msg
}
