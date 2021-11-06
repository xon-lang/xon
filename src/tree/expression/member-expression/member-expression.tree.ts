import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  instance: ExpressionTree;
  isSafe: boolean;
  id: IdToken;

  constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    this.isSafe = !!ctx.COALESCING();
    this.id = new IdToken(ctx._name);
  }

  toString(): string {
    return `${this.instance}${this.id}`;
  }
}
