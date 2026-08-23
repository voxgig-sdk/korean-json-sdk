# KoreanJson Python SDK



The Python SDK for the KoreanJson API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Comment()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/korean-json-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from koreanjson_sdk import KoreanJsonSDK

client = KoreanJsonSDK()
```

### 2. List comment records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    comments = client.Comment().list()
    for comment in comments:
        print(comment)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a comment

`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    comment = client.Comment().load({"id": 1})
    print(comment)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Comment().create({"content": "example_content", "createdAt": "example_createdAt"})

# Update — the created record's id is a plain dict key
client.Comment().update({"id": created.data_get()["id"], "content": "example_content", "createdAt": "example_createdAt"})

# Remove
client.Comment().remove({"id": created.data_get()["id"]})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    posts = client.Post().list()
    print(posts)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = KoreanJsonSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
post = client.Post().list()
# post contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = KoreanJsonSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
KOREAN_JSON_TEST_LIVE=TRUE
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### KoreanJsonSDK

```python
from koreanjson_sdk import KoreanJsonSDK

client = KoreanJsonSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = KoreanJsonSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### KoreanJsonSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Comment` | `(data) -> CommentEntity` | Create a Comment entity instance. |
| `Post` | `(data) -> PostEntity` | Create a Post entity instance. |
| `Todo` | `(data) -> TodoEntity` | Create a Todo entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Comment

| Field | Description |
| --- | --- |
| `content` | Comment content in Korean |
| `createdAt` | Comment creation timestamp |
| `id` | Comment ID |
| `postId` | Post ID the comment belongs to |
| `updatedAt` | Comment last update timestamp |
| `userId` | User ID who created the comment |

Operations: Create, List, Load, Remove, Update.

API path: `/comments`

#### Post

| Field | Description |
| --- | --- |
| `content` | Post content in Korean |
| `createdAt` | Post creation timestamp |
| `id` | Post ID |
| `title` | Post title in Korean |
| `updatedAt` | Post last update timestamp |
| `userId` | User ID who created the post |

Operations: Create, List, Load, Remove, Update.

API path: `/posts`

#### Todo

| Field | Description |
| --- | --- |
| `completed` | Todo completion status |
| `id` | Todo ID |
| `title` | Todo title in Korean |
| `userId` | User ID who owns the todo |

Operations: Create, List, Load, Remove, Update.

API path: `/todos`

#### User

| Field | Description |
| --- | --- |
| `city` | User city in Korean |
| `district` | User district in Korean |
| `email` | User email |
| `id` | User ID |
| `name` | User name in Korean |
| `phone` | User phone number |
| `province` | User province in Korean |
| `street` | User street in Korean |
| `username` | Username |
| `website` | User website |
| `zipcode` | User zipcode |

Operations: Create, List, Load, Remove, Update.

API path: `/users`



## Entities


### Comment

Create an instance: `comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` | Comment content in Korean |
| `createdAt` | `str` | Comment creation timestamp |
| `id` | `int` | Comment ID |
| `postId` | `int` | Post ID the comment belongs to |
| `updatedAt` | `str` | Comment last update timestamp |
| `userId` | `int` | User ID who created the comment |

#### Example: Load

```python
comment = client.Comment().load({"id": 1})
```

#### Example: List

```python
comments = client.Comment().list()
```

#### Example: Create

```python
comment = client.Comment().create({
})
```


### Post

Create an instance: `post = client.Post()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` | Post content in Korean |
| `createdAt` | `str` | Post creation timestamp |
| `id` | `int` | Post ID |
| `title` | `str` | Post title in Korean |
| `updatedAt` | `str` | Post last update timestamp |
| `userId` | `int` | User ID who created the post |

#### Example: Load

```python
post = client.Post().load({"id": 1})
```

#### Example: List

```python
posts = client.Post().list()
```

#### Example: Create

```python
post = client.Post().create({
})
```


### Todo

Create an instance: `todo = client.Todo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | `bool` | Todo completion status |
| `id` | `int` | Todo ID |
| `title` | `str` | Todo title in Korean |
| `userId` | `int` | User ID who owns the todo |

#### Example: Load

```python
todo = client.Todo().load({"id": 1})
```

#### Example: List

```python
todos = client.Todo().list()
```

#### Example: Create

```python
todo = client.Todo().create({
})
```


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `city` | `str` | User city in Korean |
| `district` | `str` | User district in Korean |
| `email` | `str` | User email |
| `id` | `int` | User ID |
| `name` | `str` | User name in Korean |
| `phone` | `str` | User phone number |
| `province` | `str` | User province in Korean |
| `street` | `str` | User street in Korean |
| `username` | `str` | Username |
| `website` | `str` | User website |
| `zipcode` | `str` | User zipcode |

#### Example: Load

```python
user = client.User().load({"id": 1})
```

#### Example: List

```python
users = client.User().list()
```

#### Example: Create

```python
user = client.User().create({
})
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── koreanjson_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`koreanjson_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
post = client.Post()
post.list()

# post.data_get() now returns the post data from the last list
# post.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
