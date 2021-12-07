import { PipeExpressionContext } from '../../../grammar/xon-parser';
import { PipeExpressionMetadata } from '../../../metadata/expression/pipe/pipe-expression-metadata';
import { IdToken } from '../../id-token';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PipeExpressionTree extends ExpressionTree {
  metadata: PipeExpressionMetadata;
  id?: IdToken;
  left: ExpressionTree;
  right: ExpressionTree;

  constructor(public ctx: PipeExpressionContext) {
    super();
    this.id = (ctx.id() && IdToken.fromContext(ctx.id())) || null;
    this.left = getExpressionTree(ctx.expression(0));
    this.right = getExpressionTree(ctx.expression(1));
  }

  toString(): string {
    const id = this.id ? `${this.id}:` : '';
    return `${this.left} |${id} ${this.right}`;
  }
}
