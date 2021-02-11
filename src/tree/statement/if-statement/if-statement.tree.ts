import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTrees } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
  public items: {
    condition: ExpressionTree;
    hasElse: boolean;
    hasIf: boolean;
    keyword: string;
    statements: StatementTree[];
  }[] = [];

  public constructor(public ctx?: IfStatementContext) {
    super();
    if (!ctx) return;

    this.items = ctx.expression().map((x, i) => ({
      condition: getExpressionTree(x),
      hasElse: !!i,
      hasIf: true,
      keyword: i ? 'elif' : 'if',
      statements: getStatementsTrees(ctx.body(i)),
    }));
    if (ctx.Else()) {
      this.items.push({
        condition: null,
        hasElse: true,
        hasIf: false,
        keyword: 'else',
        statements: getStatementsTrees(ctx.body(ctx.body().length - 1)),
      });
    }
  }
}
