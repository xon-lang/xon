import { LiteralContext } from '../../grammar/xon-parser';
import { BooleanLiteralTree } from './boolean-literal/boolean-literal.tree';
import { DecimalLiteralTree } from './decimal-literal/decimal-literal.tree';
import { FloatLiteralTree } from './float-literal/float-literal.tree';
import { LiteralTree } from './literal.tree';
import { NullLiteralTree } from './null-literal/null-literal.tree';
import { StringLiteralTree } from './string-literal/string-literal.tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree {
    if (ctx.NullLiteral()) return new NullLiteralTree(ctx);
    if (ctx.BooleanLiteral()) return new BooleanLiteralTree(ctx);
    if (ctx.DecimalLiteral()) return new DecimalLiteralTree(ctx);
    if (ctx.FloatLiteral()) return new FloatLiteralTree(ctx);
    if (ctx.StringLiteral()) return new StringLiteralTree(ctx);

    throw Error('No Literal found for ' + ctx.constructor.name);
}
