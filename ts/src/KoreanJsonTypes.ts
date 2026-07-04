// Typed models for the KoreanJson SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Comment {
  content?: string
  created_at?: string
  id?: number
  post_id?: number
  updated_at?: string
  user_id?: number
}

export interface CommentLoadMatch {
  id: number
}

export type CommentListMatch = Partial<Comment>

export type CommentCreateData = Partial<Comment>

export interface CommentUpdateData {
  id: number
}

export interface CommentRemoveMatch {
  id: number
}

export interface Post {
  content?: string
  created_at?: string
  id?: number
  title?: string
  updated_at?: string
  user_id?: number
}

export interface PostLoadMatch {
  id: number
}

export type PostListMatch = Partial<Post>

export type PostCreateData = Partial<Post>

export interface PostUpdateData {
  id: number
}

export interface PostRemoveMatch {
  id: number
}

export interface Todo {
  completed?: boolean
  id?: number
  title?: string
  user_id?: number
}

export interface TodoLoadMatch {
  id: number
}

export type TodoListMatch = Partial<Todo>

export type TodoCreateData = Partial<Todo>

export interface TodoUpdateData {
  id: number
}

export interface TodoRemoveMatch {
  id: number
}

export interface User {
  city?: string
  district?: string
  email?: string
  id?: number
  name?: string
  phone?: string
  province?: string
  street?: string
  username?: string
  website?: string
  zipcode?: string
}

export interface UserLoadMatch {
  id: number
}

export type UserListMatch = Partial<User>

export type UserCreateData = Partial<User>

export interface UserUpdateData {
  id: number
}

export interface UserRemoveMatch {
  id: number
}

