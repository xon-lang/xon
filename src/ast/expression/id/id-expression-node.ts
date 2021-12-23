import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdExpressionMetadata } from '../../../metadata/expression/id/id-expression-metadata';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { ExpressionNode } from '../expression-node';

export class IdExpressionNode extends ExpressionNode {
  metadata: IdExpressionMetadata;
  id: IdNode;

  constructor(public ctx: IdExpressionContext) {
    super();

    this.id = getIdNode(ctx.id());
  }

  toString(): string {
    return this.id.toString();
  }
}
