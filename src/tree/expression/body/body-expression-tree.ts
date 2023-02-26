import { BodyExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class BodyExpressionTree extends ExpressionTree {
  ctx: BodyExpressionContext;
  sourceSpan: SourceSpan;
  expression: ExpressionTree;
  body: BodyTree;

  constructor(ctx: BodyExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.expression = getExpressionTree(ctx.expression());
    this.body = getBodyTree(ctx.body());
    this.addChildren(this.expression, this.body);
  }
}
