import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  instance: ExpressionTree;
  isSafe: boolean;
  id: IdToken;
  typeArguments: TypeTree[];

  constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    this.isSafe = !!ctx.COALESCING();
    this.id = new IdToken(ctx._name);
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
  }

  toString(): string {
    if (this.typeArguments) return `${this.instance}.${this.id}<${this.typeArguments.join(', ')}>`;
    return `${this.instance}.${this.id}`;
  }
}
