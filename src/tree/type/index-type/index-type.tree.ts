import { IndexParenthesizedTypeContext, IndexTypeContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IndexTypeTree extends TypeTree {
  name: string;
  genericParameters: IdToken[] = [];
  parameters: ParameterTree[] = [];
  returnType: TypeTree;

  constructor(public ctx?: IndexTypeContext | IndexParenthesizedTypeContext) {
    super();
    if (!ctx) return;
    if (!ctx.type()) throw new Error('Index method must have return value');
    if (ctx.indexParameters().parameter().length === 0)
      throw new Error('Index method must have at least one parameter');

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.genericParameters = ctx.genericParameters()?._names.map((x) => new IdToken(x)) || [];
    this.parameters = getParametersTrees(ctx.indexParameters());
    this.returnType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const genericParameters = this.genericParameters?.join(', ');
    const parameters = this.parameters.join(', ');
    const returnType = this.returnType;
    return `${genericParameters ? `<${genericParameters}>` : ''}[${parameters}] ${returnType}`;
  }
}
