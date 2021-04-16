import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { createFunctionType, createPlainType } from '../../../tree/type/type-helper';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class LambdaExpressionType extends ExpressionType {
  public constructor(public tree: LambdaExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.body, this.genericsMap);
    this.tree.type = createFunctionType(
      [],
      this.tree.parameters.map(() => createPlainType('Any')),
      this.tree.body.type,
    );
  }
}
