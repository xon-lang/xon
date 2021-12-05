import { LambdaTypeContext } from '../../../grammar/xon-parser';
import { LambdaTypeMetadata } from '../../../metadata/type/lambda/lambda-type-metadata';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class LambdaTypeTree extends TypeTree {
  metadata: LambdaTypeMetadata;
  parameters: ParameterTree[] = [];
  resultType?: TypeTree;

  constructor(public ctx: LambdaTypeContext) {
    super();

    this.parameters = getParametersTrees(ctx.lambdaParameters().parameter());
    this.resultType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const parameters = this.parameters.join(', ');
    const resultType = this.resultType ? ' ' + this.resultType : '';
    return `(${parameters})${resultType}`;
  }
}
