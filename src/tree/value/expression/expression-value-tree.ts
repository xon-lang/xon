import { ExpressionValueContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';
import { ValueTree } from '~/tree/value/value-tree';

export class ExpressionValueTree extends ValueTree {
  ctx: ExpressionValueContext;
  assignToken: Token;
  expression: ExpressionTree | null;

  constructor(ctx: ExpressionValueContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.assignToken = Token.from(ctx.ASSIGN());
    const expression = ctx.expression() ?? null;
    this.expression = expression && getExpressionTree(expression);

    this.addChildren(this.assignToken, this.expression);
  }
}
