import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { AttributeNode } from '../../attribute/attribute-node';
import { getAttributeNodes } from '../../attribute/attribute-node-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class MethodExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  parameters: AttributeNode[] = [];
  result?: ExpressionNode;

  constructor(ctx: MethodExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.parameters = getAttributeNodes(ctx.attribute());
    this.result = getExpressionNode(ctx.expr()) || null;
  }

  toString(): string {
    const result = this.result ? ' ' + this.result : '';
    return `(${this.parameters.join(', ')})${result}`;
  }
}
