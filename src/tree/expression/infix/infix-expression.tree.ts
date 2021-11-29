import { ExpressionContext } from '../../../grammar/xon-parser';
import { InfixExpressionMetadata } from '../../../metadata/expression/infix/infix-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionTree } from '../expression.tree';

export class InfixExpressionTree extends ExpressionTree {
  metadata: InfixExpressionMetadata;
  constructor(
    public ctx: ExpressionContext,
    public id: IdToken,
    public left: ExpressionTree,
    public right: ExpressionTree,
  ) {
    super();
  }

  toString(): string {
    return `${this.left} ${this.id} ${this.right}`;
  }
}
