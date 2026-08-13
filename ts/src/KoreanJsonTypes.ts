// Typed models for the KoreanJson SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Comment {
  content?: string
  createdAt?: string
  id?: number
  postId?: number
  updatedAt?: string
  userId?: number
}

export interface CommentLoadMatch {
  id: number
}

export interface CommentListMatch {
  content?: string
  createdAt?: string
  id?: number
  postId?: number
  updatedAt?: string
  userId?: number
}

export interface CommentCreateData {
  content?: string
  createdAt?: string
  id?: number
  postId?: number
  updatedAt?: string
  userId?: number
}

export interface CommentUpdateData {
  id: number
  content?: string
  createdAt?: string
  postId?: number
  updatedAt?: string
  userId?: number
}

export interface CommentRemoveMatch {
  id: number
}

export interface Post {
  content?: string
  createdAt?: string
  id?: number
  title?: string
  updatedAt?: string
  userId?: number
}

export interface PostLoadMatch {
  id: number
}

export interface PostListMatch {
  content?: string
  createdAt?: string
  id?: number
  title?: string
  updatedAt?: string
  userId?: number
}

export interface PostCreateData {
  content?: string
  createdAt?: string
  id?: number
  title?: string
  updatedAt?: string
  userId?: number
}

export interface PostUpdateData {
  id: number
  content?: string
  createdAt?: string
  title?: string
  updatedAt?: string
  userId?: number
}

export interface PostRemoveMatch {
  id: number
}

export interface Todo {
  completed?: boolean
  id?: number
  title?: string
  userId?: number
}

export interface TodoLoadMatch {
  id: number
}

export interface TodoListMatch {
  completed?: boolean
  id?: number
  title?: string
  userId?: number
}

export interface TodoCreateData {
  completed?: boolean
  id?: number
  title?: string
  userId?: number
}

export interface TodoUpdateData {
  id: number
  completed?: boolean
  title?: string
  userId?: number
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

export interface UserListMatch {
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

export interface UserCreateData {
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

export interface UserUpdateData {
  id: number
  city?: string
  district?: string
  email?: string
  name?: string
  phone?: string
  province?: string
  street?: string
  username?: string
  website?: string
  zipcode?: string
}

export interface UserRemoveMatch {
  id: number
}

