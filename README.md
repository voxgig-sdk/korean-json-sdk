# KoreanJson SDK

Fake JSON REST API serving Korean-language sample data for prototyping

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Korean JSON API

[Korean JSON](https://koreanjson.com) is a free, JSONPlaceholder-style REST API that returns sample data in Korean. It was built by Korean developers based in Pangyo, South Korea, and has been running since February 2019.

What you get from the API:

- `GET`, `POST`, `PUT`, and `DELETE` requests against `/users`, `/posts`, `/todos`, and `/comments`
- List endpoints plus by-id item endpoints (e.g. `/posts/1`)
- Filtered queries via parameters such as `userId` and `postId`
- Fixed sample sets: 10 users, 200 posts, 200 todos, and 200 comments

CORS is enabled on all endpoints, so the API can be called directly from browser code. Source and contribution guidelines live at the project's [GitHub repository](https://github.com/jd1386/korean-json).

## Try it

**TypeScript**
```bash
npm install korean-json
```

**Python**
```bash
pip install korean-json-sdk
```

**PHP**
```bash
composer require voxgig/korean-json-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/korean-json-sdk/go
```

**Ruby**
```bash
gem install korean-json-sdk
```

**Lua**
```bash
luarocks install korean-json-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { KoreanJsonSDK } from 'korean-json'

const client = new KoreanJsonSDK({})

// List all comments
const comments = await client.Comment().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o korean-json-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "korean-json": {
      "command": "/abs/path/to/korean-json-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Comment** | Korean-language sample comment records exposed under `/comments` (filterable by `postId`). | `/comments` |
| **Post** | Korean-language sample post records exposed under `/posts` (filterable by `userId`). | `/posts` |
| **Todo** | Korean-language sample todo items exposed under `/todos` (filterable by `userId`). | `/todos` |
| **User** | Korean-language sample user profiles exposed under `/users`. | `/users` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from koreanjson_sdk import KoreanJsonSDK

client = KoreanJsonSDK({})

# List all comments
comments, err = client.Comment(None).list(None, None)

# Load a specific comment
comment, err = client.Comment(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'koreanjson_sdk.php';

$client = new KoreanJsonSDK([]);

// List all comments
[$comments, $err] = $client->Comment(null)->list(null, null);

// Load a specific comment
[$comment, $err] = $client->Comment(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/korean-json-sdk/go"

client := sdk.NewKoreanJsonSDK(map[string]any{})

// List all comments
comments, err := client.Comment(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "KoreanJson_sdk"

client = KoreanJsonSDK.new({})

# List all comments
comments, err = client.Comment(nil).list(nil, nil)

# Load a specific comment
comment, err = client.Comment(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("korean-json_sdk")

local client = sdk.new({})

-- List all comments
local comments, err = client:Comment(nil):list(nil, nil)

-- Load a specific comment
local comment, err = client:Comment(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = KoreanJsonSDK.test()
const result = await client.Comment().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = KoreanJsonSDK.test(None, None)
result, err = client.Comment(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = KoreanJsonSDK::test(null, null);
[$result, $err] = $client->Comment(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Comment(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = KoreanJsonSDK.test(nil, nil)
result, err = client.Comment(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Comment(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Korean JSON API

- Upstream: [https://koreanjson.com](https://koreanjson.com)

---

Generated from the Korean JSON API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
