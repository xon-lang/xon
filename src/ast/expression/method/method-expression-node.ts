import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ParameterNode } from '../../parameter/parameter-node';
import { getParameterNodes } from '../../parameter/parameter-node-helper';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression-node-helper';

export class MethodExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  generics: ExpressionNode[];
  parameters: ParameterNode[];
  body: ExpressionNode;

  constructor(public ctx: MethodExpressionContext) {
    super();

    this.generics = getExpressionNodes(ctx.methodHeader().generics());
    this.parameters = getParameterNodes(ctx.methodHeader().parameter());
    this.body = getExpressionNode(ctx.expr());
  }

  toString(): string {
    const generics = this.generics.length ? '<' + this.generics.join(', ') + '>' : '';
    if (generics) {
      return `<${this.generics}>(${this.parameters.join(', ')}): ${this.body}`;
    }
    return `(${this.parameters.join(', ')}): ${this.body}`;
  }
}
