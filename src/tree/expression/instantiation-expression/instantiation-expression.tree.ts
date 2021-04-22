import { InstantiationExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { PlainTypeTree } from '../../type/plain-type/plain-type.tree';
import { createPlainType, getTypesTrees } from '../../type/type-helper';
import { ExpressionTree } from '../expression.tree';

export class InstantiationExpressionTree extends ExpressionTree {
  public type: PlainTypeTree;

  public arguments: ArgumentTree[];

  public constructor(public ctx?: InstantiationExpressionContext) {
    super();
    if (!ctx) return;

    const generics = getTypesTrees(ctx.generics()?.type());
    this.type = createPlainType(ctx.DEFINITION_ID().text, generics);
    this.arguments = ArgumentTree.fromContext(ctx.arguments());
  }

  public toString(): string {
    const args = this.arguments.length
      ? `(${this.arguments.map((x) => x.toString()).join(', ')})`
      : '';
    return `${this.type.toString()}(${args})`;
  }
}
