import { ArgumentContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';
import { Tree } from '~/tree/tree';

export class ArgumentTree extends Tree {
  ctx: ArgumentContext;
  sourceSpan: SourceSpan;
  name: Token | null;
  value: ExpressionTree | null;

  constructor(ctx: ArgumentContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const id = ctx.id() ?? null;
    this.name = id && Token.from(id);
    const value = ctx.expression();
    this.value = (value && getExpressionTree(value)) ?? null;
    this.addChildren(this.name, this.value);
  }
}
