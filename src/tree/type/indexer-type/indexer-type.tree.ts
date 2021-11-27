import { IndexerTypeContext } from '../../../grammar/xon-parser';
import { FunctionTypeMetadata } from '../../../metadata/type/function/function-type-metadata';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class IndexerTypeTree extends TypeTree {
  metadata: FunctionTypeMetadata;
  name: string;
  parameters: ExpressionParameterTree[] = [];
  returnType: TypeTree;

  constructor(public ctx?: IndexerTypeContext) {
    super();
    if (!ctx) return;
    if (!ctx.type()) throw new Error('Index method must have return value');
    if (ctx.indexerParameters().expressionParameter().length === 0)
      throw new Error('Index method must have at least one parameter');

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.parameters = getExpressionParametersTrees(ctx.indexerParameters());
    this.returnType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const parameters = this.parameters.join(', ');
    const returnType = this.returnType;
    return `[${parameters}] ${returnType}`;
  }
}
