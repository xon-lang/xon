import { InstantiationExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsTrees } from '../../argument/argument-tree.helper';
import { ArgumentTree } from '../../argument/argument.tree';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class InstantiationExpressionTree extends ExpressionTree {
  public id: IdToken;
  public genericArguments: TypeTree[];
  public arguments: ArgumentTree[];

  public constructor(public ctx?: InstantiationExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
    this.arguments = getArgumentsTrees(ctx.arguments());
  }

  public toString(): string {
    const generics = this.genericArguments.length ? `<${this.genericArguments.join(', ')}>` : '';
    const args = this.arguments.length ? `(${this.arguments.join(', ')})` : '';
    return `${this.id}${generics}${args}`;
  }
}
