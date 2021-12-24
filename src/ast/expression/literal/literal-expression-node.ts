import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata';
import { LiteralNode } from '../../literal/literal-node';
import { getLiteralNode } from '../../literal/literal-node-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';

export class LiteralExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: LiteralExpressionMetadata;
  literal: LiteralNode;

  constructor(public ctx: LiteralExpressionContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.literal = ctx && getLiteralNode(ctx.literal());
  }

  toString(): string {
    return `${this.literal}`;
  }
}
