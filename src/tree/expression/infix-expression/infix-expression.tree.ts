import { ExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { ExpressionTree } from '../expression.tree';

export class InfixExpressionTree extends ExpressionTree {
  public constructor(
    public ctx: ExpressionContext,
    public id: IdToken,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {
    super();
  }

  public toString(): string {
    return `${this.left} ${this.id} ${this.right}`;
  }
}
