import {
  FloatLiteralContext,
  IntegerLiteralContext,
  LiteralContext,
  StringLiteralContext,
} from '~/grammar';
import { Issue } from '~/issue';
import { FloatLiteralTree, IntegerLiteralTree, LiteralTree, StringLiteralTree } from '~/tree';

export function getLiteralTree(ctx: LiteralContext): LiteralTree | null {
  if (!ctx) return null;
  if (ctx instanceof FloatLiteralContext) return new FloatLiteralTree(ctx);
  if (ctx instanceof IntegerLiteralContext) return new IntegerLiteralTree(ctx);
  if (ctx instanceof StringLiteralContext) return new StringLiteralTree(ctx);

  Issue.errorFromContext(ctx, `Literal tree not found for "${ctx.constructor.name}"`);
}
