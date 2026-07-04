# Typed models for the KoreanJson SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Comment(TypedDict, total=False):
    content: str
    created_at: str
    id: int
    post_id: int
    updated_at: str
    user_id: int


class CommentLoadMatch(TypedDict):
    id: int


class CommentListMatch(TypedDict, total=False):
    content: str
    created_at: str
    id: int
    post_id: int
    updated_at: str
    user_id: int


class CommentCreateData(TypedDict, total=False):
    content: str
    created_at: str
    id: int
    post_id: int
    updated_at: str
    user_id: int


class CommentUpdateData(TypedDict):
    id: int


class CommentRemoveMatch(TypedDict):
    id: int


class Post(TypedDict, total=False):
    content: str
    created_at: str
    id: int
    title: str
    updated_at: str
    user_id: int


class PostLoadMatch(TypedDict):
    id: int


class PostListMatch(TypedDict, total=False):
    content: str
    created_at: str
    id: int
    title: str
    updated_at: str
    user_id: int


class PostCreateData(TypedDict, total=False):
    content: str
    created_at: str
    id: int
    title: str
    updated_at: str
    user_id: int


class PostUpdateData(TypedDict):
    id: int


class PostRemoveMatch(TypedDict):
    id: int


class Todo(TypedDict, total=False):
    completed: bool
    id: int
    title: str
    user_id: int


class TodoLoadMatch(TypedDict):
    id: int


class TodoListMatch(TypedDict, total=False):
    completed: bool
    id: int
    title: str
    user_id: int


class TodoCreateData(TypedDict, total=False):
    completed: bool
    id: int
    title: str
    user_id: int


class TodoUpdateData(TypedDict):
    id: int


class TodoRemoveMatch(TypedDict):
    id: int


class User(TypedDict, total=False):
    city: str
    district: str
    email: str
    id: int
    name: str
    phone: str
    province: str
    street: str
    username: str
    website: str
    zipcode: str


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    city: str
    district: str
    email: str
    id: int
    name: str
    phone: str
    province: str
    street: str
    username: str
    website: str
    zipcode: str


class UserCreateData(TypedDict, total=False):
    city: str
    district: str
    email: str
    id: int
    name: str
    phone: str
    province: str
    street: str
    username: str
    website: str
    zipcode: str


class UserUpdateData(TypedDict):
    id: int


class UserRemoveMatch(TypedDict):
    id: int
