import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class ReturnStatementNode implements StatementNode {
  sourceReference: SourceReference;
  value?: ExpressionNode;

  constructor(public ctx: ReturnStatementContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.value = ctx.expr() && getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `return${this.value ? ' ' + this.value : ''}`;
  }
}
