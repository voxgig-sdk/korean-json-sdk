-- Typed models for the KoreanJson SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Comment
---@field content? string
---@field created_at? string
---@field id? number
---@field post_id? number
---@field updated_at? string
---@field user_id? number

---@class CommentLoadMatch
---@field id number

---@class CommentListMatch

---@class CommentCreateData

---@class CommentUpdateData
---@field id number

---@class CommentRemoveMatch
---@field id number

---@class Post
---@field content? string
---@field created_at? string
---@field id? number
---@field title? string
---@field updated_at? string
---@field user_id? number

---@class PostLoadMatch
---@field id number

---@class PostListMatch

---@class PostCreateData

---@class PostUpdateData
---@field id number

---@class PostRemoveMatch
---@field id number

---@class Todo
---@field completed? boolean
---@field id? number
---@field title? string
---@field user_id? number

---@class TodoLoadMatch
---@field id number

---@class TodoListMatch

---@class TodoCreateData

---@class TodoUpdateData
---@field id number

---@class TodoRemoveMatch
---@field id number

---@class User
---@field city? string
---@field district? string
---@field email? string
---@field id? number
---@field name? string
---@field phone? string
---@field province? string
---@field street? string
---@field username? string
---@field website? string
---@field zipcode? string

---@class UserLoadMatch
---@field id number

---@class UserListMatch

---@class UserCreateData

---@class UserUpdateData
---@field id number

---@class UserRemoveMatch
---@field id number

local M = {}

return M
