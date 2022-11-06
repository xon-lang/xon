import { ForStatementContext } from '~/grammar/xon-parser';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceRange } from '~/util/source-range';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceRange: SourceRange;
  parameter?: DeclarationTree;
  expression: ExpressionTree;
  body: SourceTree;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.parameter = getDeclarationTree(ctx.declaration());
    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.parameter, this.expression, this.body);
  }
}
