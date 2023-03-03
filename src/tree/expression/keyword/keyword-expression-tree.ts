import { KeywordExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class KeywordExpressionTree extends ExpressionTree {
  ctx: KeywordExpressionContext;
  sourceSpan: SourceSpan;
  name: Token;
  expression: ExpressionTree | null;

  constructor(ctx: KeywordExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = Token.from(ctx.KEYWORD());
    const expression = ctx.expression();
    this.expression = (expression && getExpressionTree(expression)) ?? null;
    this.addChildren(this.name, this.expression);
  }
}
