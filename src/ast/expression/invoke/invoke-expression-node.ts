import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression-node-helper';

export class InvokeExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  instance: ExpressionNode;
  arguments: ExpressionNode[];

  constructor(public ctx: InvokeExpressionContext) {
    super();

    this.instance = getExpressionNode(ctx.expr());
    this.arguments = getExpressionNodes(ctx.arguments().expr());
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}