import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  id: IdToken;
  typeArguments: TypeTree[];

  constructor(public ctx?: IdExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
  }

  toString(): string {
    if (this.typeArguments) return `${this.id}<${this.typeArguments.join(', ')}>`;
    return this.id.toString();
  }
}
