import { DefinitionAncestorContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExpressionsTrees } from '../expression/expression-tree.helper';
import { ExpressionTree } from '../expression/expression.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class DefinitionAncestorTree extends BaseTree {
  type: TypeTree;
  arguments: ExpressionTree[] = [];

  constructor(public ctx?: DefinitionAncestorContext) {
    super();

    this.type = getTypeTree(ctx.type());
    this.arguments = getExpressionsTrees(ctx.functionArguments()?.expression());
  }
}
