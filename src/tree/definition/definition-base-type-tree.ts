import { DefinitionBaseTypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionsTrees } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { IdTypeTree } from '../type/id-type/id-type.tree';
import { getTypeTree } from '../type/type-tree.helper';

export class DefinitionBaseTypeTree extends BaseTree {
  type: IdTypeTree;
  arguments: ExpressionTree[] = [];

  constructor(public ctx?: DefinitionBaseTypeContext) {
    super();

    const type = getTypeTree(ctx.type());
    if (!(type instanceof IdTypeTree)) throw new Error(`'${type.constructor.name}' is not id type`);

    this.type = type;
    this.arguments = getExpressionsTrees(ctx.functionArguments()?.expression()) || [];
  }
}
