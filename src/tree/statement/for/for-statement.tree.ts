import { ForStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getStatementsFromBody } from '../statement-node-helper';
import { StatementNode } from '../statement-node';

export class ForStatementTree extends StatementNode {
  valueVarName?: string;
  indexVarName?: string;
  expression: ExpressionNode;
  body: StatementNode[];

  constructor(public ctx: ForStatementContext) {
    super();

    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionNode(ctx.expression());
    this.body = getStatementsFromBody(ctx.body());
  }

  toString(): string {
    const vars = [this.valueVarName, this.indexVarName].filter((x) => x).join(',');
    const statements = this.body.join('\n').replace(/^/gm, '  ');
    return `for ${vars ? vars + ' ' : ''}${this.expression}\n${statements}`;
  }
}
