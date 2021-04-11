import { IdExpressionContext } from '../../../grammar/xon-parser';
import { getTypesTrees } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class IdExpressionTree extends ExpressionTree {
  public name: string;

  public generics: TypeTree[];

  public constructor(public ctx: IdExpressionContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.generics = getTypesTrees(ctx.type());
  }
}
