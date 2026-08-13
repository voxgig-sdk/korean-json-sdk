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
    createdAt: str
    id: int
    postId: int
    updatedAt: str
    userId: int


class CommentLoadMatch(TypedDict):
    id: int


class CommentListMatch(TypedDict, total=False):
    content: str
    createdAt: str
    id: int
    postId: int
    updatedAt: str
    userId: int


class CommentCreateData(TypedDict, total=False):
    content: str
    createdAt: str
    id: int
    postId: int
    updatedAt: str
    userId: int


class CommentUpdateDataRequired(TypedDict):
    id: int


class CommentUpdateData(CommentUpdateDataRequired, total=False):
    content: str
    createdAt: str
    postId: int
    updatedAt: str
    userId: int


class CommentRemoveMatch(TypedDict):
    id: int


class Post(TypedDict, total=False):
    content: str
    createdAt: str
    id: int
    title: str
    updatedAt: str
    userId: int


class PostLoadMatch(TypedDict):
    id: int


class PostListMatch(TypedDict, total=False):
    content: str
    createdAt: str
    id: int
    title: str
    updatedAt: str
    userId: int


class PostCreateData(TypedDict, total=False):
    content: str
    createdAt: str
    id: int
    title: str
    updatedAt: str
    userId: int


class PostUpdateDataRequired(TypedDict):
    id: int


class PostUpdateData(PostUpdateDataRequired, total=False):
    content: str
    createdAt: str
    title: str
    updatedAt: str
    userId: int


class PostRemoveMatch(TypedDict):
    id: int


class Todo(TypedDict, total=False):
    completed: bool
    id: int
    title: str
    userId: int


class TodoLoadMatch(TypedDict):
    id: int


class TodoListMatch(TypedDict, total=False):
    completed: bool
    id: int
    title: str
    userId: int


class TodoCreateData(TypedDict, total=False):
    completed: bool
    id: int
    title: str
    userId: int


class TodoUpdateDataRequired(TypedDict):
    id: int


class TodoUpdateData(TodoUpdateDataRequired, total=False):
    completed: bool
    title: str
    userId: int


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


class UserUpdateDataRequired(TypedDict):
    id: int


class UserUpdateData(UserUpdateDataRequired, total=False):
    city: str
    district: str
    email: str
    name: str
    phone: str
    province: str
    street: str
    username: str
    website: str
    zipcode: str


class UserRemoveMatch(TypedDict):
    id: int
