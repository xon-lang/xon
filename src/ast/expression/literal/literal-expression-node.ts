import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata';
import { getLiteralNode } from '../../literal/literal-node-helper';
import { LiteralNode } from '../../literal/literal-node';
import { ExpressionNode } from '../expression-node';

export class LiteralExpressionNode extends ExpressionNode {
  metadata: LiteralExpressionMetadata;
  literal: LiteralNode;

  constructor(public ctx: LiteralExpressionContext) {
    super();

    this.literal = ctx && getLiteralNode(ctx.literal());
  }

  toString(): string {
    return `${this.literal}`;
  }
}
