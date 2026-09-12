import { CommentEntity } from './entity/CommentEntity';
import { PostEntity } from './entity/PostEntity';
import { TodoEntity } from './entity/TodoEntity';
import { UserEntity } from './entity/UserEntity';
export type * from './KoreanJsonTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { KoreanJsonEntityBase } from './KoreanJsonEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class KoreanJsonSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Comment(entopts?: Record<string, any>): CommentEntity;
    Post(entopts?: Record<string, any>): PostEntity;
    Todo(entopts?: Record<string, any>): TodoEntity;
    User(entopts?: Record<string, any>): UserEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): KoreanJsonSDK;
    tester(testopts?: any, sdkopts?: any): KoreanJsonSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof KoreanJsonSDK;
export { stdutil, config, BaseFeature, KoreanJsonEntityBase, KoreanJsonSDK, SDK, };
