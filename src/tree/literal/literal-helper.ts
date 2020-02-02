import { BooleanLiteralTree, DecimalLiteralTree, FloatLiteralTree, StringLiteralTree } from '.';
import {
    BooleanLiteralContext,
    CharacterLiteralContext,
    DecimalLiteralContext,
    FloatLiteralContext,
    LiteralContext,
    StringLiteralContext,
} from '../../grammar/xon-parser';
import { CharacterLiteralTree } from './character-literal';
import { LiteralTree } from './literal.tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree {
    if (ctx instanceof BooleanLiteralContext) return new BooleanLiteralTree(ctx);
    if (ctx instanceof CharacterLiteralContext) return new CharacterLiteralTree(ctx);
    if (ctx instanceof DecimalLiteralContext) return new DecimalLiteralTree(ctx);
    if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
    if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);
}
