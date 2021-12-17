import { IsExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class IsExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  value: ExpressionNode;
  type: ExpressionNode;

  constructor(public ctx: IsExpressionContext) {
    super();

    this.value = getExpressionNode(ctx._left);
    this.type = getExpressionNode(ctx._right);
  }

  toString(): string {
    return `${this.value} ${this.ctx.IS().text} ${this.type}`;
  }
}
