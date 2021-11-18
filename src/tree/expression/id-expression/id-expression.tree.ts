import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  id: IdToken;
  genericArguments: TypeTree[];

  constructor(public ctx?: IdExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
  }

  toString(): string {
    if (this.genericArguments) return `${this.id}<${this.genericArguments.join(', ')}>`;
    return this.id.toString();
  }
}
