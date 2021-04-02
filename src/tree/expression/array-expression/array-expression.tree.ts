import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { createArrayType } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  public arguments: ArgumentTree[];

  public constructor(public ctx?: ArrayExpressionContext) {
    super();

    this.arguments = ctx.argument().map((x) => new ArgumentTree(x)) || [];
  }

  public getType(): TypeTree {
    return this.arguments.length && createArrayType(this.arguments[0].getType());
  }
}
