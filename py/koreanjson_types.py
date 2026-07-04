# Typed models for the KoreanJson SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Comment:
    content: Optional[str] = None
    created_at: Optional[str] = None
    id: Optional[int] = None
    post_id: Optional[int] = None
    updated_at: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class CommentLoadMatch:
    id: int


@dataclass
class CommentListMatch:
    content: Optional[str] = None
    created_at: Optional[str] = None
    id: Optional[int] = None
    post_id: Optional[int] = None
    updated_at: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class CommentCreateData:
    content: Optional[str] = None
    created_at: Optional[str] = None
    id: Optional[int] = None
    post_id: Optional[int] = None
    updated_at: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class CommentUpdateData:
    id: int


@dataclass
class CommentRemoveMatch:
    id: int


@dataclass
class Post:
    content: Optional[str] = None
    created_at: Optional[str] = None
    id: Optional[int] = None
    title: Optional[str] = None
    updated_at: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class PostLoadMatch:
    id: int


@dataclass
class PostListMatch:
    content: Optional[str] = None
    created_at: Optional[str] = None
    id: Optional[int] = None
    title: Optional[str] = None
    updated_at: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class PostCreateData:
    content: Optional[str] = None
    created_at: Optional[str] = None
    id: Optional[int] = None
    title: Optional[str] = None
    updated_at: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class PostUpdateData:
    id: int


@dataclass
class PostRemoveMatch:
    id: int


@dataclass
class Todo:
    completed: Optional[bool] = None
    id: Optional[int] = None
    title: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class TodoLoadMatch:
    id: int


@dataclass
class TodoListMatch:
    completed: Optional[bool] = None
    id: Optional[int] = None
    title: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class TodoCreateData:
    completed: Optional[bool] = None
    id: Optional[int] = None
    title: Optional[str] = None
    user_id: Optional[int] = None


@dataclass
class TodoUpdateData:
    id: int


@dataclass
class TodoRemoveMatch:
    id: int


@dataclass
class User:
    city: Optional[str] = None
    district: Optional[str] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    province: Optional[str] = None
    street: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None
    zipcode: Optional[str] = None


@dataclass
class UserLoadMatch:
    id: int


@dataclass
class UserListMatch:
    city: Optional[str] = None
    district: Optional[str] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    province: Optional[str] = None
    street: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None
    zipcode: Optional[str] = None


@dataclass
class UserCreateData:
    city: Optional[str] = None
    district: Optional[str] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    province: Optional[str] = None
    street: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None
    zipcode: Optional[str] = None


@dataclass
class UserUpdateData:
    id: int


@dataclass
class UserRemoveMatch:
    id: int

