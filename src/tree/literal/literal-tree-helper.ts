import {
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  StringLiteralContext,
} from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { FloatLiteralTree } from '~/tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '~/tree/literal/integer/integer-literal-tree';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { StringLiteralTree } from '~/tree/literal/string/string-literal-tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree | null {
  if (!ctx) return null;
  if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  Issue.errorFromContext(ctx, `Literal tree not found for "${ctx.constructor.name}"`);
}
