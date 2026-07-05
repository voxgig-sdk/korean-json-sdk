# frozen_string_literal: true

# Typed models for the KoreanJson SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Comment entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
Comment = Struct.new(
  :content,
  :created_at,
  :id,
  :post_id,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for Comment#load.
#
# @!attribute [rw] id
#   @return [Integer]
CommentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Comment#list.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
CommentListMatch = Struct.new(
  :content,
  :created_at,
  :id,
  :post_id,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for Comment#create.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] post_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
CommentCreateData = Struct.new(
  :content,
  :created_at,
  :id,
  :post_id,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for Comment#update.
#
# @!attribute [rw] id
#   @return [Integer]
CommentUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Comment#remove.
#
# @!attribute [rw] id
#   @return [Integer]
CommentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Post entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
Post = Struct.new(
  :content,
  :created_at,
  :id,
  :title,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for Post#load.
#
# @!attribute [rw] id
#   @return [Integer]
PostLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Post#list.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
PostListMatch = Struct.new(
  :content,
  :created_at,
  :id,
  :title,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for Post#create.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
PostCreateData = Struct.new(
  :content,
  :created_at,
  :id,
  :title,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for Post#update.
#
# @!attribute [rw] id
#   @return [Integer]
PostUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Post#remove.
#
# @!attribute [rw] id
#   @return [Integer]
PostRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Todo entity data model.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
Todo = Struct.new(
  :completed,
  :id,
  :title,
  :user_id,
  keyword_init: true
)

# Request payload for Todo#load.
#
# @!attribute [rw] id
#   @return [Integer]
TodoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Todo#list.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
TodoListMatch = Struct.new(
  :completed,
  :id,
  :title,
  :user_id,
  keyword_init: true
)

# Request payload for Todo#create.
#
# @!attribute [rw] completed
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [Integer, nil]
TodoCreateData = Struct.new(
  :completed,
  :id,
  :title,
  :user_id,
  keyword_init: true
)

# Request payload for Todo#update.
#
# @!attribute [rw] id
#   @return [Integer]
TodoUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Todo#remove.
#
# @!attribute [rw] id
#   @return [Integer]
TodoRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] district
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] province
#   @return [String, nil]
#
# @!attribute [rw] street
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
User = Struct.new(
  :city,
  :district,
  :email,
  :id,
  :name,
  :phone,
  :province,
  :street,
  :username,
  :website,
  :zipcode,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [Integer]
UserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] district
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] province
#   @return [String, nil]
#
# @!attribute [rw] street
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
UserListMatch = Struct.new(
  :city,
  :district,
  :email,
  :id,
  :name,
  :phone,
  :province,
  :street,
  :username,
  :website,
  :zipcode,
  keyword_init: true
)

# Request payload for User#create.
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] district
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] province
#   @return [String, nil]
#
# @!attribute [rw] street
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] zipcode
#   @return [String, nil]
UserCreateData = Struct.new(
  :city,
  :district,
  :email,
  :id,
  :name,
  :phone,
  :province,
  :street,
  :username,
  :website,
  :zipcode,
  keyword_init: true
)

# Request payload for User#update.
#
# @!attribute [rw] id
#   @return [Integer]
UserUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#remove.
#
# @!attribute [rw] id
#   @return [Integer]
UserRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

