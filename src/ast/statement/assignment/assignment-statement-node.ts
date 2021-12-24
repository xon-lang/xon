import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class AssignmentStatementNode implements StatementNode {
  sourceReference: SourceReference;
  id: IdNode;
  value: ExpressionNode;

  constructor(public ctx: AssignmentStatementContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.id = getIdNode(ctx.id());
    this.value = getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `${this.id} = ${this.value}`;
  }
}
