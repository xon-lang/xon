import {
  BooleanLiteralContext,
  CharLiteralContext,
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  NullLiteralContext,
  StringLiteralContext,
} from '../../grammar/xon-parser';
import { BooleanLiteralTree } from './boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from './char-literal/char-literal.tree';
import { FloatLiteralTree } from './float-literal/float-literal.tree';
import { IntegerLiteralTree } from './integer-literal/integer-literal.tree';
import { LiteralTree } from './literal.tree';
import { NullLiteralTree } from './null-literal/null-literal.tree';
import { StringLiteralTree } from './string-literal/string-literal.tree';

export const getLiteralTree = (ctx: LiteralContext): LiteralTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof BooleanLiteralContext) return new BooleanLiteralTree(ctx);
  if (ctx instanceof CharLiteralContext) return new CharLiteralTree(ctx);
  if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralTree(ctx);
  if (ctx instanceof NullLiteralContext) return new NullLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  throw Error(`Literal tree not found for "${ctx.constructor.name}"`);
};
