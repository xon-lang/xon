import { ExprContext } from '../../../grammar/xon-parser';
import { InfixExpressionMetadata } from '../../../metadata/expression/infix/infix-expression-metadata';
import { IdToken } from '../../util/id-token';
import { ExpressionNode } from '../expression-node';

export class InfixExpressionNode extends ExpressionNode {
  metadata: InfixExpressionMetadata;
  constructor(
    public ctx: ExprContext,
    public id: IdToken,
    public left: ExpressionNode,
    public right: ExpressionNode,
  ) {
    super();
  }

  toString(): string {
    return `${this.left} ${this.id} ${this.right}`;
  }
}
