import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getStatementsFromBody } from '../../statement/statement-tree.helper';
import { StatementTree } from '../../statement/statement.tree';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  parameters: ParameterTree[];
  body: StatementTree[];

  constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = getParametersTrees(ctx.parameters());
    this.body = getStatementsFromBody(ctx.body());
    if (this.body.length !== 1) throw new Error('Lambda should be with single expression');
  }

  toString(): string {
    return `(${this.parameters.join(', ')}): ${this.body[0]}`;
  }
}
