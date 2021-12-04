import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdExpressionMetadata } from '../../../metadata/expression/id/id-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  metadata: IdExpressionMetadata;
  id: IdToken;

  constructor(public ctx: IdExpressionContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
  }

  toString(): string {
    return this.id.toString();
  }
}
