import { ArgumentContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { Tree } from '~/tree/tree';

export class ArgumentTree extends Tree {
  ctx: ArgumentContext;
  sourceSpan: SourceSpan;
  name: IdTree | null;
  value: ExpressionTree | null;

  constructor(ctx: ArgumentContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = (ctx._name && getIdTree(ctx._name)) ?? null;
    const value = ctx.expression();
    this.value = (value && getExpressionTree(value)) ?? null;
    this.addChildren(this.name, this.value);
  }
}
