import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../../util/id-token';
import { SourceReference } from '../../../util/source-reference';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class PrefixExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  id: IdToken;
  value: ExpressionTree;

  constructor(ctx: PrefixExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = new IdToken(ctx._op);
    this.value = getExpressionTree(ctx.expr());
  }

  toString(): string {
    if (['+', '-'].includes(this.id.text)) {
      return `${this.id}${this.value}`;
    }
    return `${this.id} ${this.value}`;
  }
}
