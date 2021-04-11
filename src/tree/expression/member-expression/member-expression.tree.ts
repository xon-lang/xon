import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
  public name: string;

  public generics: TypeTree[];

  public object: ExpressionTree;

  public constructor(public ctx?: MemberExpressionContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.generics = getTypesTrees(ctx.type());
    this.object = getExpressionTree(ctx.expression());
  }
}
