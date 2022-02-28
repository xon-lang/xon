import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../../util/id-token';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  operator: IdToken;
  isIdOperator: boolean;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.operator = new IdToken(ctx._op);
    this.isIdOperator = !!ctx.NOT();
    this.value = getExpressionTree(ctx.expr());
  }

  toString(): string {
    if (this.isIdOperator) {
      return `${this.operator} ${this.value}`;
    }
    return `${this.operator}${this.value}`;
  }
}
