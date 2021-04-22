import { LoopStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getBody } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class LoopStatementTree extends StatementTree {
  public indexVarName?: string;

  public valueVarName?: string;

  public expression: ExpressionTree;

  public body: StatementTree[];

  public constructor(public ctx?: LoopStatementContext) {
    super();
    if (!ctx) return;

    this.indexVarName = ctx._index?.text;
    this.valueVarName = ctx._value?.text;
    this.expression = getExpressionTree(ctx.expression());
    this.body = getBody(ctx.body());
  }
}
