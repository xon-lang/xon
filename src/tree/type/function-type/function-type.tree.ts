import { FunctionParenthesizedTypeContext, FunctionTypeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  name: string;
  genericParameters: IdToken[] = [];
  parameters: ParameterTree[] = [];
  returnType?: TypeTree;

  constructor(public ctx?: FunctionTypeContext | FunctionParenthesizedTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.genericParameters = ctx.genericParameters()?._names.map((x) => new IdToken(x)) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.returnType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const genericParameters = this.genericParameters?.join(', ');
    const parameters = this.parameters.join(', ');
    const returnType = this.returnType;
    return `${genericParameters ? `<${genericParameters}>` : ''}(${parameters}) ${returnType}`;
  }
}
