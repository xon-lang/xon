import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdExpressionMetadata } from '../../../metadata/expression/id/id-expression-metadata';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  metadata: IdExpressionMetadata;
  id: IdToken;
  typeArguments: TypeTree[];

  constructor(public ctx: IdExpressionContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
  }

  toString(): string {
    const typeArguments = this.typeArguments.length
      ? '<' + this.typeArguments.join(', ') + '>'
      : '';
    if (typeArguments) return `${this.id}<${this.typeArguments.join(', ')}>`;
    return this.id.toString();
  }
}
