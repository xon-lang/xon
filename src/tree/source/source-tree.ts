import { SourceContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Tree } from '~/tree/tree';

export class SourceTree extends Tree {
  expressions: ExpressionTree[] = [];

  constructor(ctx: SourceContext | null) {
    if (!ctx) {
      return;
    }
    super(SourceSpan.fromContext(ctx));
    this.expressions = ctx.expression().map(getExpressionTree);
    this.addChildren(...this.expressions);
  }
}
