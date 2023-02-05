import { ImportStatementContext, InvokeExpressionContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class ImportStatementTree extends StatementTree {
  path: ExpressionTree | null;
  arguments: ArgumentTree[] = [];

  constructor(public ctx: ImportStatementContext) {
    super(ctx);
    const expression = ctx.expression();
    if (expression instanceof InvokeExpressionContext) {
      this.path = getExpressionTree(expression.expression());
      this.arguments = expression.arguments()[0].argument().map(getArgumentTree);
    } else {
      this.path = (expression && getExpressionTree(expression)) ?? null;
    }
    this.addChildren(this.path, ...this.arguments);
  }
}
