import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { getTypesTrees } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MethodExpressionTree extends ExpressionTree {
  public generics: TypeTree[];

  public arguments: ArgumentTree[];

  public object: ExpressionTree;

  public constructor(public ctx?: MethodExpressionContext) {
    super();
    if (!ctx) return;

    this.object = getExpressionTree(ctx.expression());
    this.generics = getTypesTrees(ctx.type());
    this.arguments = ArgumentTree.fromContext(ctx.arguments());
  }
}
