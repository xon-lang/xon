import { DefinitionBaseTypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionsTrees } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { IdTypeTree } from '../type/id-type/id-type.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class DefinitionBaseTypeTree extends BaseTree {
  type: TypeTree;
  arguments: ExpressionTree[] = [];

  constructor(public ctx?: DefinitionBaseTypeContext) {
    super();

    this.type = getTypeTree(ctx.type());
    if (!(this.type instanceof IdTypeTree))
      throw new Error(`'${this.type.constructor.name}' is not id type`);

    this.arguments = getExpressionsTrees(ctx.functionArguments().expression());
  }
}
