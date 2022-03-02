import {
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  RegexLiteralContext,
  StringLiteralContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { FloatLiteralTree } from './float/float-literal-tree';
import { IntegerLiteralTree } from './integer/integer-literal-tree';
import { LiteralTree } from './literal-tree';
import { RegexLiteralTree } from './regex/regex-literal-tree';
import { StringLiteralTree } from './string/string-literal-tree';

export const getLiteralTree = (ctx: LiteralContext): LiteralTree => {
  if (!ctx) return null;

  if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralTree(ctx);
  if (ctx instanceof RegexLiteralContext) return new RegexLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  Issue.errorFromContext(ctx, `Literal tree not found for "${ctx.constructor.name}"`);
};
