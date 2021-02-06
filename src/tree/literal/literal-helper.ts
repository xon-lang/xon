import {
  BooleanLiteralContext,
  CharLiteralContext,
  LiteralContext,
  NumberLiteralContext,
  StringLiteralContext,
} from '../../grammar/xon-parser';
import { BooleanLiteralTree } from './boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from './char-literal/char-literal.tree';
import { LiteralTree } from './literal.tree';
import { NumberLiteralTree } from './number-literal/number-literal.tree';
import { StringLiteralTree } from './string-literal/string-literal.tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree<unknown> {
  if (ctx === undefined) return undefined;

  if (ctx instanceof BooleanLiteralContext) return new BooleanLiteralTree(ctx);
  if (ctx instanceof NumberLiteralContext) return new NumberLiteralTree(ctx);
  if (ctx instanceof CharLiteralContext) return new CharLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  throw Error(`No Literal found for ${ctx.constructor.name}`);
}
