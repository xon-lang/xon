import { KeywordStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class KeywordStatementTree extends ExpressionTree {
  ctx: KeywordStatementContext;
  sourceSpan: SourceSpan;
  name: Token;
  expression: ExpressionTree | null;
  body: BodyTree | null;

  constructor(ctx: KeywordStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = Token.from(ctx.KEYWORD());
    const expression = ctx.expression();
    this.expression = (expression && getExpressionTree(expression)) ?? null;
    const body = ctx.body();
    this.body = (body && getBodyTree(body)) ?? null;
    this.addChildren(this.name, this.expression, this.body);
  }
}
