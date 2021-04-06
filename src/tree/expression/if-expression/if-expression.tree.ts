import { IfExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { TypeTree } from '../../type/type.tree';
import { getStatementsTrees } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';

export class IfExpressionTree extends ExpressionTree {
  public condition: ExpressionTree;

  public ifStatements: StatementTree[];

  public elseStatements?: StatementTree[];

  public constructor(public ctx?: IfExpressionContext) {
    super();
    if (!ctx) return;

    this.condition = getExpressionTree(ctx.expression());
    this.ifStatements = getStatementsTrees(ctx.body(0));
    if (ctx.ELSE()) this.elseStatements = getStatementsTrees(ctx.body(1));
  }

  public getType(): TypeTree {
    throw new Error(`${this}method not implemented.`);
  }
}
