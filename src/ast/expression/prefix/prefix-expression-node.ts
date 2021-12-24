import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdToken } from '../../util/id-token';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class PrefixExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  id: IdToken;
  value: ExpressionNode;

  constructor(ctx: PrefixExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = new IdToken(ctx._op);
    this.value = getExpressionNode(ctx.expr());
  }

  toString(): string {
    if (['+', '-'].includes(this.id.text)) return `${this.id}${this.value}`;
    return `${this.id} ${this.value}`;
  }
}
