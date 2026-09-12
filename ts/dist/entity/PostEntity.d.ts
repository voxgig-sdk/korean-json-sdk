import { KoreanJsonEntityBase } from '../KoreanJsonEntityBase';
import type { KoreanJsonSDK } from '../KoreanJsonSDK';
import type { Control } from '../types';
import type { Post, PostLoadMatch, PostListMatch, PostCreateData, PostUpdateData, PostRemoveMatch } from '../KoreanJsonTypes';
declare class PostEntity extends KoreanJsonEntityBase<Post> {
    constructor(client: KoreanJsonSDK, entopts: any);
    make(this: PostEntity): PostEntity;
    load(this: any, reqmatch?: PostLoadMatch, ctrl?: Control): Promise<PostEntity>;
    list(this: any, reqmatch?: PostListMatch, ctrl?: Control): Promise<PostEntity[]>;
    create(this: any, reqdata?: PostCreateData, ctrl?: Control): Promise<PostEntity>;
    update(this: any, reqdata?: PostUpdateData, ctrl?: Control): Promise<PostEntity>;
    remove(this: any, reqmatch?: PostRemoveMatch, ctrl?: Control): Promise<PostEntity>;
}
export { PostEntity };
