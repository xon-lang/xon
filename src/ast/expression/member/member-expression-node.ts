import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { IdToken } from '../../id-token';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode, getExpressionNodes } from '../expression-node-helper';

export class MemberExpressionNode extends ExpressionNode {
  metadata: MemberExpressionMetadata;
  instance: ExpressionNode;
  id: IdToken;
  generics: ExpressionNode[];

  constructor(public ctx: MemberExpressionContext) {
    super();

    this.instance = getExpressionNode(ctx.expr());
    this.id = IdToken.fromContext(ctx.id());
    this.generics = getExpressionNodes(ctx.generics());
  }

  toString(): string {
    if (this.generics.length) {
      return `${this.instance}.${this.id}<${this.generics.join(', ')}>`;
    }
    return `${this.instance}.${this.id}`;
  }
}
