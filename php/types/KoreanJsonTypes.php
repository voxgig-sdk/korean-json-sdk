<?php
declare(strict_types=1);

// Typed models for the KoreanJson SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Comment entity data model. */
class Comment
{
    public ?string $content = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?int $post_id = null;
    public ?string $updated_at = null;
    public ?int $user_id = null;
}

/** Request payload for Comment#load. */
class CommentLoadMatch
{
    public int $id;
}

/** Request payload for Comment#list. */
class CommentListMatch
{
    public ?string $content = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?int $post_id = null;
    public ?string $updated_at = null;
    public ?int $user_id = null;
}

/** Request payload for Comment#create. */
class CommentCreateData
{
    public ?string $content = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?int $post_id = null;
    public ?string $updated_at = null;
    public ?int $user_id = null;
}

/** Request payload for Comment#update. */
class CommentUpdateData
{
    public int $id;
}

/** Request payload for Comment#remove. */
class CommentRemoveMatch
{
    public int $id;
}

/** Post entity data model. */
class Post
{
    public ?string $content = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?int $user_id = null;
}

/** Request payload for Post#load. */
class PostLoadMatch
{
    public int $id;
}

/** Request payload for Post#list. */
class PostListMatch
{
    public ?string $content = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?int $user_id = null;
}

/** Request payload for Post#create. */
class PostCreateData
{
    public ?string $content = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?int $user_id = null;
}

/** Request payload for Post#update. */
class PostUpdateData
{
    public int $id;
}

/** Request payload for Post#remove. */
class PostRemoveMatch
{
    public int $id;
}

/** Todo entity data model. */
class Todo
{
    public ?bool $completed = null;
    public ?int $id = null;
    public ?string $title = null;
    public ?int $user_id = null;
}

/** Request payload for Todo#load. */
class TodoLoadMatch
{
    public int $id;
}

/** Request payload for Todo#list. */
class TodoListMatch
{
    public ?bool $completed = null;
    public ?int $id = null;
    public ?string $title = null;
    public ?int $user_id = null;
}

/** Request payload for Todo#create. */
class TodoCreateData
{
    public ?bool $completed = null;
    public ?int $id = null;
    public ?string $title = null;
    public ?int $user_id = null;
}

/** Request payload for Todo#update. */
class TodoUpdateData
{
    public int $id;
}

/** Request payload for Todo#remove. */
class TodoRemoveMatch
{
    public int $id;
}

/** User entity data model. */
class User
{
    public ?string $city = null;
    public ?string $district = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $province = null;
    public ?string $street = null;
    public ?string $username = null;
    public ?string $website = null;
    public ?string $zipcode = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public int $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?string $city = null;
    public ?string $district = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $province = null;
    public ?string $street = null;
    public ?string $username = null;
    public ?string $website = null;
    public ?string $zipcode = null;
}

/** Request payload for User#create. */
class UserCreateData
{
    public ?string $city = null;
    public ?string $district = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $province = null;
    public ?string $street = null;
    public ?string $username = null;
    public ?string $website = null;
    public ?string $zipcode = null;
}

/** Request payload for User#update. */
class UserUpdateData
{
    public int $id;
}

/** Request payload for User#remove. */
class UserRemoveMatch
{
    public int $id;
}

