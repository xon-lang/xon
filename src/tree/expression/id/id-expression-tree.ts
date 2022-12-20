import { IdExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { Token } from '~/tree/token';

export class IdExpressionTree extends ExpressionTree {
  ctx: IdExpressionContext;
  sourceSpan: SourceSpan;
  name: Token;

  constructor(ctx: IdExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = Token.from(ctx.id());
    this.addChildren(this.name);
  }
}
