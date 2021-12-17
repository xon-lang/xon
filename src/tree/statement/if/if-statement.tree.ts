import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getStatementsFromBody } from '../statement-node-helper';
import { StatementNode } from '../statement-node';

export class IfStatementTree extends StatementNode {
  condition: ExpressionNode;
  thenBody: StatementNode[];
  elseBody?: StatementNode[];

  constructor(public ctx: IfStatementContext) {
    super();

    this.condition = getExpressionNode(ctx.expression());
    this.thenBody = getStatementsFromBody(ctx._thenBody);
    this.elseBody = getStatementsFromBody(ctx._elseBody);
  }

  toString(): string {
    const thenStatements = this.thenBody.join('\n').replace(/^/gm, '  ');
    const elseStatements = this.elseBody.join('\n').replace(/^/gm, '  ');
    return `if ${this.condition}:\n${thenStatements}${
      this.elseBody ? '\nelse:\n' + elseStatements : ''
    }`;
  }
}
