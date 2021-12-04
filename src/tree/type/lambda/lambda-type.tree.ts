import { LambdaTypeContext } from '../../../grammar/xon-parser';
import { LambdaTypeMetadata } from '../../../metadata/type/lambda/lambda-type-metadata';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class LambdaTypeTree extends TypeTree {
  metadata: LambdaTypeMetadata;
  name: string;
  parameters: ParameterTree[] = [];
  resultType?: TypeTree;

  constructor(public ctx: LambdaTypeContext) {
    super();

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.parameters = getParametersTrees(ctx.lambdaParameters());
    this.resultType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const parameters = this.parameters.join(', ');
    const returnType = this.resultType;
    return `(${parameters}) ${returnType}`;
  }
}
