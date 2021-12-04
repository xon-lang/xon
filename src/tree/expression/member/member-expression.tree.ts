import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata';
import { IdToken } from '../../id-token';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  metadata: MemberExpressionMetadata;
  instance: ExpressionTree;
  isSafe: boolean;
  id: IdToken;

  constructor(public ctx: MemberExpressionContext) {
    super();

    this.instance = getExpressionTree(ctx.expression());
    this.isSafe = !!ctx.COALESCING();
    this.id = IdToken.fromContext(ctx.attributeId());
  }

  toString(): string {
    return `${this.instance}.${this.id}`;
  }
}
