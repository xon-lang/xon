import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
  public id: IdToken;

  public constructor(public ctx?: InstanceExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
  }

  public toString(): string {
    return `${this.id}`;
  }
}
