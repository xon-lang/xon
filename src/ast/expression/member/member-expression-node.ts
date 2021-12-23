import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { IdNode } from '../../id/id-node';
import { getIdNode } from '../../id/id-node-helper';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class MemberExpressionNode extends ExpressionNode {
  metadata: MemberExpressionMetadata;
  instance: ExpressionNode;
  id: IdNode;

  constructor(public ctx: MemberExpressionContext) {
    super();

    this.instance = getExpressionNode(ctx.expr());
    this.id = getIdNode(ctx.id());
  }

  toString(): string {
    return `${this.instance}.${this.id}`;
  }
}
