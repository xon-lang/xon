import { InstantiationExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { createPlainType, getTypesTrees } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class InstantiationExpressionTree extends ExpressionTree {
  public type: TypeTree;

  public arguments: ArgumentTree[];

  public constructor(public ctx?: InstantiationExpressionContext) {
    super();
    if (!ctx) return;

    const generics = getTypesTrees(ctx.generics()?.type());
    this.type = createPlainType(this.ctx.DEFINITION_ID().text, generics);
    this.arguments = ArgumentTree.fromContext(ctx.arguments());
  }
}
