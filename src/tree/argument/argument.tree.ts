import { ArgumentContext, ArgumentsContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';

export class ArgumentTree extends BaseTree {
  public name?: string;

  public value: ExpressionTree;

  public constructor(public ctx?: ArgumentContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
    this.name = ctx.id()?.text;
  }

  public static fromContext(ctx: ArgumentsContext): ArgumentTree[] {
    return ctx?.argument()?.map((x) => new ArgumentTree(x)) || [];
  }
}
