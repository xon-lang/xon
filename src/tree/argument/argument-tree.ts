import { ArgumentContext } from '~/grammar';
import { ExpressionTree, getExpressionTree, getIdTree, IdTree, Tree } from '~/tree';
import { SourceRange } from '~/util';

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
