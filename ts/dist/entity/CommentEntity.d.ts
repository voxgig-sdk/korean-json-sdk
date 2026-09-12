import { KoreanJsonEntityBase } from '../KoreanJsonEntityBase';
import type { KoreanJsonSDK } from '../KoreanJsonSDK';
import type { Control } from '../types';
import type { Comment, CommentLoadMatch, CommentListMatch, CommentCreateData, CommentUpdateData, CommentRemoveMatch } from '../KoreanJsonTypes';
declare class CommentEntity extends KoreanJsonEntityBase<Comment> {
    constructor(client: KoreanJsonSDK, entopts: any);
    make(this: CommentEntity): CommentEntity;
    load(this: any, reqmatch?: CommentLoadMatch, ctrl?: Control): Promise<CommentEntity>;
    list(this: any, reqmatch?: CommentListMatch, ctrl?: Control): Promise<CommentEntity[]>;
    create(this: any, reqdata?: CommentCreateData, ctrl?: Control): Promise<CommentEntity>;
    update(this: any, reqdata?: CommentUpdateData, ctrl?: Control): Promise<CommentEntity>;
    remove(this: any, reqmatch?: CommentRemoveMatch, ctrl?: Control): Promise<CommentEntity>;
}
export { CommentEntity };
