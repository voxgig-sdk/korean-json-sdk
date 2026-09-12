import { Context } from './Context';
declare class KoreanJsonError extends Error {
    isKoreanJsonError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { KoreanJsonError };
