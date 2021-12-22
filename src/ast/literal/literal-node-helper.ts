import {
  CharLiteralContext,
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  RegexLiteralContext,
  StringLiteralContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { CharLiteralNode } from './char/char-literal-node';
import { FloatLiteralNode } from './float/float-literal-node';
import { IntegerLiteralNode } from './integer/integer-literal-node';
import { LiteralNode } from './literal-node';
import { RegexLiteralNode } from './regex/regex-literal-node';
import { StringLiteralNode } from './string/string-literal-node';

export const getLiteralTree = (ctx: LiteralContext): LiteralNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof CharLiteralContext) return new CharLiteralNode(ctx);
  if (ctx instanceof FloatLiteralContext) return new FloatLiteralNode(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralNode(ctx);
  if (ctx instanceof RegexLiteralContext) return new RegexLiteralNode(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralNode(ctx);

  throw Issue.errorFromContext(ctx, `Literal node not found for "${ctx.constructor.name}"`);
};
