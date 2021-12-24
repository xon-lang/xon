import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { PrefixExpressionMetadata } from '../../../metadata/expression/prefix/prefix-expression-metadata';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class PrefixExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: PrefixExpressionMetadata;
  id: IdToken;
  value: ExpressionNode;

  constructor(public ctx: PrefixExpressionContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.id = new IdToken(ctx._op);
    this.value = getExpressionNode(ctx.expr());
  }

  toString(): string {
    if (['+', '-'].includes(this.id.text)) return `${this.id}${this.value}`;
    return `${this.id} ${this.value}`;
  }
}
