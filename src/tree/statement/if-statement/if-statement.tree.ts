import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTrees } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
  items: {
    statements: StatementTree[];
    condition: ExpressionTree;
    hasIf: boolean;
    hasElse: boolean;
  }[] = [];

  constructor(public ctx?: IfStatementContext) {
    super();
    if (!ctx) return;

    this.items = ctx.expression().map((x, i) => ({
      statements: getStatementsTrees(ctx.body(i)),
      condition: getExpressionTree(x),
      hasIf: true,
      hasElse: !!i,
    }));
    if (ctx.Else()) {
      this.items.push({
        statements: getStatementsTrees(ctx.body(ctx.body().length - 1)),
        condition: null,
        hasIf: false,
        hasElse: true,
      });
    }
  }
}
