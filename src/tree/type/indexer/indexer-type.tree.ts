import { IndexerTypeContext } from '../../../grammar/xon-parser';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IndexerTypeTree extends TypeTree {
  typeParameters: TypeParameterTree[] = [];
  parameters: ParameterTree[] = [];
  resultType?: TypeTree;

  constructor(public ctx: IndexerTypeContext) {
    super();

    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.parameters = getParametersTrees(ctx.indexerParameters());
    this.resultType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    const parameters = this.parameters.join(', ');
    const resultType = this.resultType ? ' ' + this.resultType : '';
    return `${typeParameters}[${parameters}]${resultType}`;
  }
}
