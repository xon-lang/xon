import { InstantiationExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsTrees } from '../../argument/argument-tree.helper';
import { ArgumentTree } from '../../argument/argument.tree';
import { IdToken } from '../../id-token';
import { getTypesTrees } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class InstantiationExpressionTree extends ExpressionTree {
  id: IdToken;
  genericArguments: TypeTree[];
  arguments: ArgumentTree[];

  constructor(public ctx?: InstantiationExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.genericArguments = getTypesTrees(ctx.genericArguments()?.type());
    this.arguments = getArgumentsTrees(ctx.arguments());
  }

  toString(): string {
    const generics = this.genericArguments.length ? `<${this.genericArguments.join(', ')}>` : '';
    const args = this.arguments.length ? `(${this.arguments.join(', ')})` : '';
    return `${this.id}${generics}${args}`;
  }
}
