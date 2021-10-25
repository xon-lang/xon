import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  public id: IdToken;

  public instance: ExpressionTree;

  public constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.instance = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `${this.instance}${this.id}`;
  }
}
