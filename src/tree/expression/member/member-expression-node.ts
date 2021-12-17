import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class MemberExpressionNode extends ExpressionNode {
  metadata: MemberExpressionMetadata;
  instance: ExpressionNode;
  id: IdToken;

  constructor(public ctx: MemberExpressionContext) {
    super();

    this.instance = getExpressionNode(ctx.expr());
    this.id = IdToken.fromContext(ctx.attrId());
  }

  toString(): string {
    return `${this.instance}.${this.id}`;
  }
}
