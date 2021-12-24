import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class ParenthesizedExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  expression: ExpressionNode;

  constructor(ctx: ParenthesizedExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.expression = getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `(${this.expression})`;
  }
}
