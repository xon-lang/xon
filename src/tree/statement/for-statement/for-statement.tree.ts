import { ForStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatements } from '../statement-tree.helper';
import { StatementTree } from '../statement.tree';

export class ForStatementTree extends StatementTree {
  public valueVarName?: string;
  public indexVarName?: string;
  public expression: ExpressionTree;
  public body: StatementTree[];

  public constructor(public ctx?: ForStatementContext) {
    super();
    if (!ctx) return;

    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionTree(ctx.expression());
    this.body = getStatements(ctx.body());
  }
}
