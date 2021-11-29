import {
  CharLiteralContext,
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  RegexLiteralContext,
  StringLiteralContext,
} from '../../grammar/xon-parser';
import { CharLiteralTree } from './char/char-literal.tree';
import { FloatLiteralTree } from './float/float-literal.tree';
import { IntegerLiteralTree } from './integer/integer-literal.tree';
import { LiteralTree } from './literal.tree';
import { RegexLiteralTree } from './regex/regex-literal.tree';
import { StringLiteralTree } from './string/string-literal.tree';

export const getLiteralTree = (ctx: LiteralContext): LiteralTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof CharLiteralContext) return new CharLiteralTree(ctx);
  if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralTree(ctx);
  if (ctx instanceof RegexLiteralContext) return new RegexLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  throw Error(`Literal tree not found for "${ctx.constructor.name}"`);
};
