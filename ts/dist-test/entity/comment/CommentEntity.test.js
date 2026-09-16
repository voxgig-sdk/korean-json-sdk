"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CommentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOREAN_JSON_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOREAN_JSON_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KoreanJsonSDK.test();
        const ent = testsdk.Comment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOREAN_JSON_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'comment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "content", "req": false, "short": "Comment content in Korean", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "createdAt", "req": false, "short": "Comment creation timestamp", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Comment ID", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "postId", "req": false, "short": "Post ID the comment belongs to", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": false, "short": "Comment last update timestamp", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "userId", "req": false, "short": "User ID who created the comment", "type": "`$INTEGER`", "index$": 5 }], "id": { "field": "id", "name": "id" }, "name": "comment", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /comments", "json": "{\"operationId\":\"createComment\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"description\":\"Comment content in Korean\",\"type\":\"string\"},\"postId\":{\"description\":\"Post ID the comment belongs to\",\"type\":\"integer\"},\"userId\":{\"description\":\"User ID who created the comment\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"description\":\"Comment content in Korean\",\"type\":\"string\"},\"createdAt\":{\"description\":\"Comment creation timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Comment ID\",\"type\":\"integer\"},\"postId\":{\"description\":\"Post ID the comment belongs to\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Comment last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"userId\":{\"description\":\"User ID who created the comment\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Comment created successfully\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/comments", "segments": [{ "lit": "comments" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_id", "orig": "post_id", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "user_id", "orig": "user_id", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /comments", "json": "{\"operationId\":\"getComments\",\"parameters\":[{\"description\":\"Filter comments by user ID\",\"in\":\"query\",\"name\":\"userId\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Filter comments by post ID\",\"in\":\"query\",\"name\":\"postId\",\"required\":false,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"content\":{\"description\":\"Comment content in Korean\",\"type\":\"string\"},\"createdAt\":{\"description\":\"Comment creation timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Comment ID\",\"type\":\"integer\"},\"postId\":{\"description\":\"Post ID the comment belongs to\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Comment last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"userId\":{\"description\":\"User ID who created the comment\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/comments", "segments": [{ "lit": "comments" }], "select": { "exist": ["post_id", "user_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /comments/{id}", "json": "{\"operationId\":\"getCommentById\",\"parameters\":[{\"description\":\"Comment ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"description\":\"Comment content in Korean\",\"type\":\"string\"},\"createdAt\":{\"description\":\"Comment creation timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Comment ID\",\"type\":\"integer\"},\"postId\":{\"description\":\"Post ID the comment belongs to\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Comment last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"userId\":{\"description\":\"User ID who created the comment\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Comment not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/comments/{id}", "segments": [{ "lit": "comments" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "DELETE /comments/{id}", "json": "{\"operationId\":\"deleteComment\",\"parameters\":[{\"description\":\"Comment ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Comment deleted successfully\"},\"404\":{\"description\":\"Comment not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/comments/{id}", "segments": [{ "lit": "comments" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "PUT /comments/{id}", "json": "{\"operationId\":\"updateComment\",\"parameters\":[{\"description\":\"Comment ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"description\":\"Comment content in Korean\",\"type\":\"string\"},\"postId\":{\"description\":\"Post ID the comment belongs to\",\"type\":\"integer\"},\"userId\":{\"description\":\"User ID who created the comment\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"content\":{\"description\":\"Comment content in Korean\",\"type\":\"string\"},\"createdAt\":{\"description\":\"Comment creation timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Comment ID\",\"type\":\"integer\"},\"postId\":{\"description\":\"Post ID the comment belongs to\",\"type\":\"integer\"},\"updatedAt\":{\"description\":\"Comment last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"userId\":{\"description\":\"User ID who created the comment\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Comment updated successfully\"},\"404\":{\"description\":\"Comment not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/comments/{id}", "segments": [{ "lit": "comments" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "comment", "name__orig": "comment", "Name": "Comment", "name_": "comment", "name-": "comment", "NAME": "COMMENT", "index$": 0 }, { "active": true, "entity": "comment", "key$": "BasicCommentFlow", "kind": "basic", "name": "BasicCommentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "comment_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "comment_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "comment_ref01", "srcdatavar": "comment_ref01_data", "suffix": "_up0", "textfield": "content" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-comment_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "comment_ref01", "srcdatavar": "comment_ref01_data", "suffix": "_dt0" }, "match": { "id": "comment01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-comment_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "comment_ref01", "suffix": "_rm0" }, "match": { "id": "comment01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "comment_ref01" } }], "index$": 5 }] }, 'Comment');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const comment_ref01_ent = client.Comment();
        let comment_ref01_data = setup.data.new.comment['comment_ref01'];
        comment_ref01_data = (await comment_ref01_ent.create(comment_ref01_data)).data();
        (0, node_assert_1.default)(null != comment_ref01_data.id);
        // LIST
        const comment_ref01_match = {};
        const comment_ref01_list = (await comment_ref01_ent.list(comment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(comment_ref01_list, { id: comment_ref01_data.id })));
        // UPDATE
        const comment_ref01_data_up0 = {};
        comment_ref01_data_up0.id = comment_ref01_data.id;
        const comment_ref01_markdef_up0 = { name: 'content', value: 'Mark01-comment_ref01_' + setup.now };
        comment_ref01_data_up0[comment_ref01_markdef_up0.name] = comment_ref01_markdef_up0.value;
        const comment_ref01_resdata_up0 = (await comment_ref01_ent.update(comment_ref01_data_up0)).data();
        (0, node_assert_1.default)(comment_ref01_resdata_up0.id === comment_ref01_data_up0.id);
        (0, node_assert_1.default)(comment_ref01_resdata_up0[comment_ref01_markdef_up0.name] === comment_ref01_markdef_up0.value);
        // LOAD
        const comment_ref01_match_dt0 = {};
        comment_ref01_match_dt0.id = comment_ref01_data.id;
        const comment_ref01_data_dt0 = (await comment_ref01_ent.load(comment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(comment_ref01_data_dt0.id === comment_ref01_data.id);
        // REMOVE
        const comment_ref01_match_rm0 = { id: comment_ref01_data.id };
        await comment_ref01_ent.remove(comment_ref01_match_rm0);
        // LIST
        const comment_ref01_match_rt0 = {};
        const comment_ref01_list_rt0 = (await comment_ref01_ent.list(comment_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(comment_ref01_list_rt0, { id: comment_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/comment/CommentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KoreanJsonSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['comment01', 'comment02', 'comment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOREAN_JSON_TEST_COMMENT_ENTID': idmap,
        'KOREAN_JSON_TEST_LIVE': 'FALSE',
        'KOREAN_JSON_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['KOREAN_JSON_TEST_COMMENT_ENTID'];
    const live = 'TRUE' === env.KOREAN_JSON_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOREAN_JSON_TEST_COMMENT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KoreanJsonSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.KOREAN_JSON_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CommentEntity.test.js.map