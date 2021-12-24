import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class MemberExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  instance: ExpressionNode;
  id: IdNode;

  constructor(ctx: MemberExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.instance = getExpressionNode(ctx.expr());
    this.id = getIdNode(ctx.id());
  }

  toString(): string {
    return `${this.instance}.${this.id}`;
  }
}
