import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ParameterNode } from '../../parameter/parameter-node';
import { getParameterNodes } from '../../parameter/parameter-node-helper';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class MethodExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  parameters: ParameterNode[] = [];
  resultType?: ExpressionNode;
  body?: BodyNode;

  constructor(public ctx: MethodExpressionContext) {
    super();

    this.parameters = getParameterNodes(ctx.parameter());
    this.resultType = getExpressionNode(ctx.expr()) || null;
    this.body = getBodyNode(ctx.body()) || null;
  }

  toString(): string {
    const resultType = this.resultType ? ' ' + this.resultType : '';
    const body = this.body ? this.body : '';
    return `(${this.parameters.join(', ')})${resultType}${body}`;
  }
}
