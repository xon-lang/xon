import { DefinitionAncestorContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionsTrees } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { IdToken } from '../id-token';
import { getTypesTrees } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class DefinitionAncestorTree extends BaseTree {
  id: IdToken;
  typeArguments: TypeTree[] = [];
  arguments: ExpressionTree[] = [];

  constructor(public ctx: DefinitionAncestorContext) {
    super();

    this.id = new IdToken(ctx._name);
    this.typeArguments = getTypesTrees(ctx.typeArguments()?.type());
    this.arguments = getExpressionsTrees(ctx.lambdaArguments()?.expression());
  }

  toString(): string {
    const typeArguments = this.typeArguments.length
      ? '<' + this.typeArguments.join(', ') + '>'
      : '';
    return `is ${this.id}${typeArguments}(${this.arguments.join(', ')})`;
  }
}
