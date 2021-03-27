import { ArgumentContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionTree } from '../expression/expression-helper';
import { ExpressionTree } from '../expression/expression.tree';

export class ArgumentTree extends BaseTree {
  public name?: string;

  public value: ExpressionTree;

  public constructor(public ctx: ArgumentContext) {
    super();

    this.name = ctx.ID()?.text;
    this.value = getExpressionTree(ctx.expression());
  }
}
