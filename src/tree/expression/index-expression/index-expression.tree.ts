import { IndexExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { ArrayTypeTree } from '../../type/array-type/array-type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class IndexExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public arguments: ArgumentTree[];

  public constructor(public ctx: IndexExpressionContext) {
    super();
    this.value = getExpressionTree(ctx.expression());
    this.arguments = ctx.argument().map((x) => new ArgumentTree(x));

    this.dataType = (this.value.dataType as ArrayTypeTree)?.itemType;
  }
}
