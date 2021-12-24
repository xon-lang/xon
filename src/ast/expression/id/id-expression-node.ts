import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdExpressionMetadata } from '../../../metadata/expression/id/id-expression-metadata';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';

export class IdExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: IdExpressionMetadata;
  id: IdNode;

  constructor(ctx: IdExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.id = getIdNode(ctx.id());
  }

  toString(): string {
    return this.id.toString();
  }
}
