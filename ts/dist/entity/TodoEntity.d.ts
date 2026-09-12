import { KoreanJsonEntityBase } from '../KoreanJsonEntityBase';
import type { KoreanJsonSDK } from '../KoreanJsonSDK';
import type { Control } from '../types';
import type { Todo, TodoLoadMatch, TodoListMatch, TodoCreateData, TodoUpdateData, TodoRemoveMatch } from '../KoreanJsonTypes';
declare class TodoEntity extends KoreanJsonEntityBase<Todo> {
    constructor(client: KoreanJsonSDK, entopts: any);
    make(this: TodoEntity): TodoEntity;
    load(this: any, reqmatch?: TodoLoadMatch, ctrl?: Control): Promise<TodoEntity>;
    list(this: any, reqmatch?: TodoListMatch, ctrl?: Control): Promise<TodoEntity[]>;
    create(this: any, reqdata?: TodoCreateData, ctrl?: Control): Promise<TodoEntity>;
    update(this: any, reqdata?: TodoUpdateData, ctrl?: Control): Promise<TodoEntity>;
    remove(this: any, reqmatch?: TodoRemoveMatch, ctrl?: Control): Promise<TodoEntity>;
}
export { TodoEntity };
