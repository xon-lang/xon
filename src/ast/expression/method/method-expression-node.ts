import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ParameterNode } from '../../parameter/parameter-node';
import { getParameterNodes } from '../../parameter/parameter-node-helper';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class MethodExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  parameters: ParameterNode[] = [];
  result?: ExpressionNode;

  constructor(public ctx: MethodExpressionContext) {
    super();

    this.parameters = getParameterNodes(ctx.parameter());
    this.result = getExpressionNode(ctx.expr()) || null;
  }

  toString(): string {
    const result = this.result ? ' ' + this.result : '';
    return `(${this.parameters.join(', ')})${result}`;
  }
}
