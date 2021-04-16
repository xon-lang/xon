import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { createFunctionType, createPlainType } from '../../../tree/type/type-helper';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class LambdaExpressionType extends ExpressionType {
  public constructor(public tree: LambdaExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    const parametersTypes = this.tree.parameters.map(() => createPlainType('Any'));
    const returnType = getExpressionType(this.tree.body, this.genericsMap);
    return createFunctionType([],parametersTypes, returnType);
  }
}
