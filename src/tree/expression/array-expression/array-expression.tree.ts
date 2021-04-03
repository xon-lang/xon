import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { ArrayTypeTree } from '../../type/array-type/array-type.tree';
import { createArrayType } from '../../type/type-helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  public arguments: ArgumentTree[];

  public constructor(public ctx?: ArrayExpressionContext) {
    super();

    this.arguments = ctx.argument().map((x) => new ArgumentTree(x)) || [];
  }

  public getType(): ArrayTypeTree {
    return this.arguments.length && createArrayType(this.arguments[0].getType());
  }
}
