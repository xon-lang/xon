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
  genericArguments: TypeTree[];

  constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression());
    this.isSafe = !!ctx.COALESCING();
    this.id = new IdToken(ctx._name);
    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
  }

  toString(): string {
    if (this.genericArguments)
      return `${this.instance}.${this.id}<${this.genericArguments.join(', ')}>`;
    return `${this.instance}.${this.id}`;
  }
}
