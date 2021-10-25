import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PrefixExpressionTree extends ExpressionTree {
  public id: IdToken;
  public value: ExpressionTree;

  public constructor(public ctx?: PrefixExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._op);
    this.value = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `${this.id}${this.value}`;
  }
}
