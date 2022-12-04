import { TypeContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';
import { Tree } from '~/tree/tree';

export class TypeTree extends Tree {
  ctx: TypeContext;
  colonToken: Token;
  expression: ExpressionTree | null;

  constructor(ctx: TypeContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.colonToken = Token.from(ctx.COLON());
    const expression = ctx.expression() ?? null;
    this.expression = expression && getExpressionTree(expression);
    this.addChildren(this.colonToken, this.expression);
  }
}
