import { IfStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { StatementNode } from '../statement-node';

export class IfStatementNode extends StatementNode {
  condition: ExpressionNode;
  thenBody: BodyNode;
  elseBody?: BodyNode;

  constructor(public ctx: IfStatementContext) {
    super();

    this.condition = getExpressionNode(ctx.expr());
    this.thenBody = getBodyNode(ctx._thenBody);
    this.elseBody = getBodyNode(ctx._elseBody);
  }

  toString(): string {
    return `if ${this.condition}:\n${this.thenBody}${
      this.elseBody ? '\nelse:\n' + this.elseBody : ''
    }`;
  }
}
