import { ForStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsFromBody } from '../statement-tree.helper';
import { StatementTree } from '../statement.tree';

export class ForStatementTree extends StatementTree {
  valueVarName?: string;
  indexVarName?: string;
  expression: ExpressionTree;
  body: StatementTree[];

  constructor(public ctx: ForStatementContext) {
    super();

    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionTree(ctx.expression());
    this.body = getStatementsFromBody(ctx.body());
  }
}
