import { ArgumentContext } from '~/grammar/xon-parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { Tree } from '~/tree/tree';
import { SourceRange } from '~/util/source-range';

export class ArgumentTree extends Tree {
  ctx: ArgumentContext;
  sourceRange: SourceRange;
  name?: IdTree | null;
  value?: ExpressionTree | null;

  constructor(ctx: ArgumentContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }
}
