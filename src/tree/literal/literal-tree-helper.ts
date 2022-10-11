// this code was generated

import {
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  StringLiteralContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue/issue';
import { FloatLiteralTree } from './float/float-literal-tree';
import { IntegerLiteralTree } from './integer/integer-literal-tree';
import { LiteralTree } from './literal-tree';
import { StringLiteralTree } from './string/string-literal-tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree | null {
  if (!ctx) return null;
  if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  Issue.errorFromContext(ctx, `Literal tree not found for "${ctx.constructor.name}"`);
}

// this code was generated
