import { IfStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class IfStatementNode implements StatementNode {
  sourceReference: SourceReference;
  condition: ExpressionNode;
  thenBody: BodyNode;
  elseBody?: BodyNode;

  constructor(ctx: IfStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
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
