import { SourceContext } from '~/grammar/xon-parser';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Tree } from '~/tree/tree';

export class SourceTree extends Tree {
  metadata: SourceMetadata | null = null;
  ctx: SourceContext | null = null;
  sourceSpan!: SourceSpan;
  expressions: ExpressionTree[] = [];

  constructor(ctx: SourceContext | null) {
    super();
    if (!ctx) {
      return;
    }
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.expressions = ctx.expression().map(getExpressionTree);
    this.addChildren(...this.expressions);
  }
}
