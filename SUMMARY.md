# Korean JSON API

Super simple JSON API in Korean for GET, POST, PUT, DELETE actions providing JSON data in Korean for prototyping projects. 한국어 데이터를 제공하는 초간단 JSON API. GET, POST, PUT, DELETE 요청을 보내고 한국어 데이터를 받으세요.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 4 entities and 20 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Comment

Results: Comment created successfully; Successful response; Comment deleted successfully; Comment updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `content`: Comment content in Korean
- `createdAt`: Comment creation timestamp
- `id`: Comment ID
- `postId`: Post ID the comment belongs to
- `updatedAt`: Comment last update timestamp

### Post

Results: Post created successfully; Successful response; Post deleted successfully; Post updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `content`: Post content in Korean
- `createdAt`: Post creation timestamp
- `id`: Post ID
- `title`: Post title in Korean
- `updatedAt`: Post last update timestamp

### Todo

Results: Todo created successfully; Successful response; Todo deleted successfully; Todo updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `completed`: Todo completion status
- `id`: Todo ID
- `title`: Todo title in Korean
- `userId`: User ID who owns the todo

### User

Results: User created successfully; Successful response; User deleted successfully; User updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `city`: User city in Korean
- `district`: User district in Korean
- `email`: User email
- `id`: User ID
- `name`: User name in Korean

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Comment | `create` | `POST /comments` | See reference |
| Comment | `list` | `GET /comments` | See reference |
| Comment | `load` | `GET /comments/{id}` | See reference |
| Comment | `remove` | `DELETE /comments/{id}` | See reference |
| Comment | `update` | `PUT /comments/{id}` | See reference |
| Post | `create` | `POST /posts` | See reference |
| Post | `list` | `GET /posts` | See reference |
| Post | `load` | `GET /posts/{id}` | See reference |
| Post | `remove` | `DELETE /posts/{id}` | See reference |
| Post | `update` | `PUT /posts/{id}` | See reference |
| Todo | `create` | `POST /todos` | See reference |
| Todo | `list` | `GET /todos` | See reference |
| Todo | `load` | `GET /todos/{id}` | See reference |
| Todo | `remove` | `DELETE /todos/{id}` | See reference |
| Todo | `update` | `PUT /todos/{id}` | See reference |
| User | `create` | `POST /users` | See reference |
| User | `list` | `GET /users` | See reference |
| User | `load` | `GET /users/{id}` | See reference |
| User | `remove` | `DELETE /users/{id}` | See reference |
| User | `update` | `PUT /users/{id}` | See reference |

## Connect to the API

- Production server: `https://koreanjson.com`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `korean-json_list`: List records for an entity. Supported entities: `comment`, `post`, `todo`, `user`.
- `korean-json_load`: Load one record for an entity. Supported entities: `comment`, `post`, `todo`, `user`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

