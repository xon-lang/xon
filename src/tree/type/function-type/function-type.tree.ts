import { FunctionParenthesizedTypeContext, FunctionTypeContext } from '../../../grammar/xon-parser';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  name: string;
  parameters: ParameterTree[] = [];
  returnType?: TypeTree;

  constructor(public ctx?: FunctionTypeContext | FunctionParenthesizedTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.parameters = getParametersTrees(ctx.functionParameters());
    this.returnType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const parameters = this.parameters.join(', ');
    const returnType = this.returnType;
    return `(${parameters}) ${returnType}`;
  }
}
