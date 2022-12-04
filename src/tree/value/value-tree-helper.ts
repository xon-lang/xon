import { BodyValueContext, ExpressionValueContext, ValueContext } from '~/grammar/xon-parser';
import { Issue } from '~/issue/issue';
import { BodyValueTree } from '~/tree/value/body/body-value-tree';
import { ExpressionValueTree } from '~/tree/value/expression/expression-value-tree';
import { ValueTree } from '~/tree/value/value-tree';

export function getValueTree(ctx: ValueContext): ValueTree {
  if (ctx instanceof ExpressionValueContext) return new ExpressionValueTree(ctx);
  if (ctx instanceof BodyValueContext) return new BodyValueTree(ctx);

  Issue.errorFromContext(ctx, `Value tree not found for "${ctx.constructor.name}"`);
}
