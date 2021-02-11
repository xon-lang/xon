import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public args: {
    name: string;
    type?: TypeTree;
  }[];

  public body: ExpressionTree;

  public constructor(public ctx: LambdaExpressionContext) {
    super();
    this.args = ctx.ID().map((x, i) => ({
      name: x.text,
      type: ctx.type(i) && new TypeTree(ctx.type(i)),
    }));
    this.body = getExpressionTree(ctx.expression());
  }
}
