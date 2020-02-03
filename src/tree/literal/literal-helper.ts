import {
    BooleanLiteralContext,
    DecimalLiteralContext,
    FloatLiteralContext,
    LiteralContext,
    StringLiteralContext,
} from '../../grammar/xon-parser';
import { BooleanLiteralTree } from './boolean-literal/boolean-literal.tree';
import { DecimalLiteralTree } from './decimal-literal/decimal-literal.tree';
import { FloatLiteralTree } from './float-literal/float-literal.tree';
import { LiteralTree } from './literal.tree';
import { StringLiteralTree } from './string-literal/string-literal.tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree {
    if (ctx instanceof BooleanLiteralContext) return new BooleanLiteralTree(ctx);
    if (ctx instanceof DecimalLiteralContext) return new DecimalLiteralTree(ctx);
    if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
    if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);
    throw 'No Literal found for ' + ctx.constructor.name;
}
