# KoreanJson PHP SDK



The PHP SDK for the KoreanJson API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
composer require voxgig-sdk/korean-json
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'koreanjson_sdk.php';

$client = new KoreanJsonSDK([
    "apikey" => getenv("KOREAN-JSON_APIKEY"),
]);
```

### 2. List comments

```php
[$result, $err] = $client->Comment()->list();
if ($err) { throw new \Exception($err); }

if (is_array($result)) {
    foreach ($result as $item) {
        $d = $item->data_get();
        echo $d["id"] . " " . $d["name"] . "\n";
    }
}
```

### 3. Load a comment

```php
[$result, $err] = $client->Comment()->load(["id" => "example_id"]);
if ($err) { throw new \Exception($err); }
print_r($result);
```

### 4. Create, update, and remove

```php
// Create
[$created, $_] = $client->Comment()->create(["name" => "Example"]);

// Update
$client->Comment()->update(["id" => $created["id"], "name" => "Example-Renamed"]);

// Remove
$client->Comment()->remove(["id" => $created["id"]]);
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
}
```

### Prepare a request without sending it

```php
[$fetchdef, $err] = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = KoreanJsonSDK::test();

[$result, $err] = $client->KoreanJson()->load(["id" => "test01"]);
// $result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new KoreanJsonSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
KOREAN-JSON_TEST_LIVE=TRUE
KOREAN-JSON_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### KoreanJsonSDK

```php
require_once 'koreanjson_sdk.php';
$client = new KoreanJsonSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = KoreanJsonSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### KoreanJsonSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Comment` | `($data): CommentEntity` | Create a Comment entity instance. |
| `Post` | `($data): PostEntity` | Create a Post entity instance. |
| `Todo` | `($data): TodoEntity` | Create a Todo entity instance. |
| `User` | `($data): UserEntity` | Create a User entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return `[$result, $err]`. The first value is an
`array` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Comment

| Field | Description |
| --- | --- |
| `content` |  |
| `created_at` |  |
| `id` |  |
| `post_id` |  |
| `updated_at` |  |
| `user_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/comments`

#### Post

| Field | Description |
| --- | --- |
| `content` |  |
| `created_at` |  |
| `id` |  |
| `title` |  |
| `updated_at` |  |
| `user_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/posts`

#### Todo

| Field | Description |
| --- | --- |
| `completed` |  |
| `id` |  |
| `title` |  |
| `user_id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/todos`

#### User

| Field | Description |
| --- | --- |
| `city` |  |
| `district` |  |
| `email` |  |
| `id` |  |
| `name` |  |
| `phone` |  |
| `province` |  |
| `street` |  |
| `username` |  |
| `website` |  |
| `zipcode` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/users`



## Entities


### Comment

Create an instance: `const comment = client.Comment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | ``$STRING`` |  |
| `created_at` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `post_id` | ``$INTEGER`` |  |
| `updated_at` | ``$STRING`` |  |
| `user_id` | ``$INTEGER`` |  |

#### Example: Load

```ts
const comment = await client.Comment().load({ id: 'comment_id' })
```

#### Example: List

```ts
const comments = await client.Comment().list()
```

#### Example: Create

```ts
const comment = await client.Comment().create({
})
```


### Post

Create an instance: `const post = client.Post()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | ``$STRING`` |  |
| `created_at` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `title` | ``$STRING`` |  |
| `updated_at` | ``$STRING`` |  |
| `user_id` | ``$INTEGER`` |  |

#### Example: Load

```ts
const post = await client.Post().load({ id: 'post_id' })
```

#### Example: List

```ts
const posts = await client.Post().list()
```

#### Example: Create

```ts
const post = await client.Post().create({
})
```


### Todo

Create an instance: `const todo = client.Todo()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | ``$BOOLEAN`` |  |
| `id` | ``$INTEGER`` |  |
| `title` | ``$STRING`` |  |
| `user_id` | ``$INTEGER`` |  |

#### Example: Load

```ts
const todo = await client.Todo().load({ id: 'todo_id' })
```

#### Example: List

```ts
const todos = await client.Todo().list()
```

#### Example: Create

```ts
const todo = await client.Todo().create({
})
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `city` | ``$STRING`` |  |
| `district` | ``$STRING`` |  |
| `email` | ``$STRING`` |  |
| `id` | ``$INTEGER`` |  |
| `name` | ``$STRING`` |  |
| `phone` | ``$STRING`` |  |
| `province` | ``$STRING`` |  |
| `street` | ``$STRING`` |  |
| `username` | ``$STRING`` |  |
| `website` | ``$STRING`` |  |
| `zipcode` | ``$STRING`` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
})
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── koreanjson_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`koreanjson_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$moon = $client->Moon();
[$result, $err] = $moon->load(["planet_id" => "earth", "id" => "luna"]);

// $moon->dataGet() now returns the loaded moon data
// $moon->matchGet() returns the last match criteria
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
