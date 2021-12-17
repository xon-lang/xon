import { PipeExpressionContext } from '../../../grammar/xon-parser';
import { PipeExpressionMetadata } from '../../../metadata/expression/pipe/pipe-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class PipeExpressionTree extends ExpressionNode {
  metadata: PipeExpressionMetadata;
  id?: IdToken;
  left: ExpressionNode;
  right: ExpressionNode;

  constructor(public ctx: PipeExpressionContext) {
    super();
    this.id = (ctx.id() && IdToken.fromContext(ctx.id())) || null;
    this.left = getExpressionNode(ctx.expr(0));
    this.right = getExpressionNode(ctx.expr(1));
  }

  toString(): string {
    const id = this.id ? `${this.id}:` : '';
    return `${this.left} |${id} ${this.right}`;
  }
}
