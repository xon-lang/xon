import { LambdaTypeContext } from '../../../grammar/xon-parser';
import { LambdaTypeMetadata } from '../../../metadata/type/lambda/lambda-type-metadata';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeParametersTrees } from '../../type-parameter/type-parameter-tree.helper';
import { TypeParameterTree } from '../../type-parameter/type-parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class LambdaTypeTree extends TypeTree {
  metadata: LambdaTypeMetadata;
  typeParameters: TypeParameterTree[] = [];
  parameters: ParameterTree[] = [];
  resultType?: TypeTree;

  constructor(public ctx: LambdaTypeContext) {
    super();

    this.typeParameters = getTypeParametersTrees(ctx.typeParameters());
    this.parameters = getParametersTrees(ctx.lambdaParameters());
    this.resultType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const typeParameters = this.typeParameters.length
      ? '<' + this.typeParameters.join(', ') + '>'
      : '';
    const parameters = this.parameters.join(', ');
    const resultType = this.resultType ? ' ' + this.resultType : '';
    return `${typeParameters}(${parameters})${resultType}`;
  }
}
