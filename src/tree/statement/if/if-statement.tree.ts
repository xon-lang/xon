import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsFromBody } from '../statement-tree.helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
  condition: ExpressionTree;
  thenBody: StatementTree[];
  elseBody?: StatementTree[];

  constructor(public ctx: IfStatementContext) {
    super();

    this.condition = getExpressionTree(ctx.expression());
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
