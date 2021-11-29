import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { PrefixExpressionMetadata } from '../../../metadata/expression/prefix/prefix-expression-metadata';
import { IdToken } from '../../id-token';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PrefixExpressionTree extends ExpressionTree {
  metadata: PrefixExpressionMetadata;
  id: IdToken;
  value: ExpressionTree;

  constructor(public ctx: PrefixExpressionContext) {
    super();

    this.id = new IdToken(ctx._op);
    this.value = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `${this.id}${this.value}`;
  }
}
