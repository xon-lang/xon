import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression-node-helper';

export class IndexExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  instance: ExpressionNode;
  arguments: ExpressionNode[];

  constructor(ctx: IndexExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.instance = getExpressionNode(ctx._instance);
    this.arguments = getExpressionNodes(ctx._args);
  }

  toString(): string {
    return `${this.instance}[${this.arguments.join(', ')}]`;
  }
}
