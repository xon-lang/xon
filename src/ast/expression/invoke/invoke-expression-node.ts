import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression-node-helper';

export class InvokeExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  instance: ExpressionNode;
  arguments: ExpressionNode[];

  constructor(ctx: InvokeExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.instance = getExpressionNode(ctx._instance);
    this.arguments = getExpressionNodes(ctx._args);
  }

  toString(): string {
    return `${this.instance}(${this.arguments.join(', ')})`;
  }
}
