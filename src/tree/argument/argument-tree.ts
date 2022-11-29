import { ArgumentContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { TokenTree } from '~/tree/token/token-tree';
import { getTokenTree } from '~/tree/token/token-tree-helper';
import { Tree } from '~/tree/tree';

export class ArgumentTree extends Tree {
  ctx: ArgumentContext;
  sourceSpan: SourceSpan;
  name: TokenTree | null;
  value: ExpressionTree | null;

  constructor(ctx: ArgumentContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = (ctx._name && getTokenTree(ctx._name)) ?? null;
    const value = ctx.expression();
    this.value = (value && getExpressionTree(value)) ?? null;
    this.addChildren(this.name, this.value);
  }
}
