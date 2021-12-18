import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { PrefixExpressionMetadata } from '../../../metadata/expression/prefix/prefix-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class PrefixExpressionNode extends ExpressionNode {
  metadata: PrefixExpressionMetadata;
  id: IdToken;
  value: ExpressionNode;

  constructor(public ctx: PrefixExpressionContext) {
    super();

    this.id = new IdToken(ctx._op);
    this.value = getExpressionNode(ctx.expr());
  }

  toString(): string {
    if (['+', '-'].includes(this.id.text)) return `${this.id}${this.value}`;
    return `${this.id} ${this.value}`;
  }
}
