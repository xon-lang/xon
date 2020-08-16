import {
    BooleanLiteralContext,
    LiteralContext,
    NullLiteralContext,
    NumberLiteralContext,
    StringLiteralContext,
} from '../../grammar/xon-parser';
import { BooleanLiteralTree } from './boolean-literal/boolean-literal.tree';
import { LiteralTree } from './literal.tree';
import { NullLiteralTree } from './null-literal/null-literal.tree';
import { NumberLiteralTree } from './number-literal/number-literal.tree';
import { StringLiteralTree } from './string-literal/string-literal.tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree {
    if (ctx == undefined) return undefined;

    if (ctx instanceof NullLiteralContext) return new NullLiteralTree(ctx);
    if (ctx instanceof BooleanLiteralContext) return new BooleanLiteralTree(ctx);
    if (ctx instanceof NumberLiteralContext) return new NumberLiteralTree(ctx);
    if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

    throw Error('No Literal found for ' + ctx.constructor.name);
}
