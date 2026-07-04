// Typed models for the KoreanJson SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Comment is the typed data model for the comment entity.
type Comment struct {
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	PostId *int `json:"post_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// CommentLoadMatch is the typed request payload for Comment.LoadTyped.
type CommentLoadMatch struct {
	Id int `json:"id"`
}

// CommentListMatch mirrors the comment fields as an all-optional match
// filter (Go analog of Partial<Comment>).
type CommentListMatch struct {
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	PostId *int `json:"post_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// CommentCreateData mirrors the comment fields as an all-optional match
// filter (Go analog of Partial<Comment>).
type CommentCreateData struct {
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	PostId *int `json:"post_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// CommentUpdateData is the typed request payload for Comment.UpdateTyped.
type CommentUpdateData struct {
	Id int `json:"id"`
}

// CommentRemoveMatch is the typed request payload for Comment.RemoveTyped.
type CommentRemoveMatch struct {
	Id int `json:"id"`
}

// Post is the typed data model for the post entity.
type Post struct {
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// PostLoadMatch is the typed request payload for Post.LoadTyped.
type PostLoadMatch struct {
	Id int `json:"id"`
}

// PostListMatch mirrors the post fields as an all-optional match
// filter (Go analog of Partial<Post>).
type PostListMatch struct {
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// PostCreateData mirrors the post fields as an all-optional match
// filter (Go analog of Partial<Post>).
type PostCreateData struct {
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// PostUpdateData is the typed request payload for Post.UpdateTyped.
type PostUpdateData struct {
	Id int `json:"id"`
}

// PostRemoveMatch is the typed request payload for Post.RemoveTyped.
type PostRemoveMatch struct {
	Id int `json:"id"`
}

// Todo is the typed data model for the todo entity.
type Todo struct {
	Completed *bool `json:"completed,omitempty"`
	Id *int `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// TodoLoadMatch is the typed request payload for Todo.LoadTyped.
type TodoLoadMatch struct {
	Id int `json:"id"`
}

// TodoListMatch mirrors the todo fields as an all-optional match
// filter (Go analog of Partial<Todo>).
type TodoListMatch struct {
	Completed *bool `json:"completed,omitempty"`
	Id *int `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// TodoCreateData mirrors the todo fields as an all-optional match
// filter (Go analog of Partial<Todo>).
type TodoCreateData struct {
	Completed *bool `json:"completed,omitempty"`
	Id *int `json:"id,omitempty"`
	Title *string `json:"title,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// TodoUpdateData is the typed request payload for Todo.UpdateTyped.
type TodoUpdateData struct {
	Id int `json:"id"`
}

// TodoRemoveMatch is the typed request payload for Todo.RemoveTyped.
type TodoRemoveMatch struct {
	Id int `json:"id"`
}

// User is the typed data model for the user entity.
type User struct {
	City *string `json:"city,omitempty"`
	District *string `json:"district,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Province *string `json:"province,omitempty"`
	Street *string `json:"street,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch mirrors the user fields as an all-optional match
// filter (Go analog of Partial<User>).
type UserListMatch struct {
	City *string `json:"city,omitempty"`
	District *string `json:"district,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Province *string `json:"province,omitempty"`
	Street *string `json:"street,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// UserCreateData mirrors the user fields as an all-optional match
// filter (Go analog of Partial<User>).
type UserCreateData struct {
	City *string `json:"city,omitempty"`
	District *string `json:"district,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Province *string `json:"province,omitempty"`
	Street *string `json:"street,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// UserUpdateData is the typed request payload for User.UpdateTyped.
type UserUpdateData struct {
	Id int `json:"id"`
}

// UserRemoveMatch is the typed request payload for User.RemoveTyped.
type UserRemoveMatch struct {
	Id int `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
