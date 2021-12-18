import { InExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class InExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  value: ExpressionNode;
  type: ExpressionNode;

  constructor(public ctx: InExpressionContext) {
    super();

    this.value = getExpressionNode(ctx._left);
    this.type = getExpressionNode(ctx._right);
  }

  toString(): string {
    return `${this.value} ${this.ctx.IN().text} ${this.type}`;
  }
}
