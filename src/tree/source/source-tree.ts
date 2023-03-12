import { SourceContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Tree } from '~/tree/tree';

export class SourceTree implements Tree {
  expressions: ExpressionTree[] = [];

  constructor(ctx: SourceContext | null) {
    if (!ctx) {
      return;
    }
    this.expressions = ctx.expression().map(getExpressionTree);
  }
}
