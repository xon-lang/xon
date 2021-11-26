import { FunctionTypeContext } from '../../../grammar/xon-parser';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { getTypeTree } from '../type-tree.helper';
import { TypeTree } from '../type.tree';

export class FunctionTypeTree extends TypeTree {
  name: string;
  parameters: ExpressionParameterTree[] = [];
  resultType?: TypeTree;

  constructor(public ctx?: FunctionTypeContext) {
    super();
    if (!ctx) return;

    this.name = this.constructor.name.replace(TypeTree.name, '');
    this.parameters = getExpressionParametersTrees(ctx.functionParameters());
    this.resultType = (ctx.type() && getTypeTree(ctx.type())) || null;
  }

  toString(): string {
    const parameters = this.parameters.join(', ');
    const returnType = this.resultType;
    return `(${parameters}) ${returnType}`;
  }
}
