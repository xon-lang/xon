import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { FunctionTypeTree } from '../../type/function-type/function-type.tree';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MethodExpressionTree extends ExpressionTree {
  public arguments: ArgumentTree[];

  public object: ExpressionTree;

  public constructor(public ctx: MethodExpressionContext) {
    super();

    this.arguments = ctx.argument().map((x) => new ArgumentTree(x));
    this.object = getExpressionTree(ctx.expression());
  }

  public getType(): TypeTree {
    const type = this.object.getType();
    if (type instanceof FunctionTypeTree) return type.returnType;

    throw new Error(`${this} is not implemented`);
  }
}
