import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { fillExpressionTypes } from '../../expression/expression-inference.helper';
import { GenericsMap } from '../../generics-map';
import { StatementInference } from '../statement.inference';

export class ExpressionStatementInference extends StatementInference {
  public constructor(public tree: ExpressionStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.value, this.genericsMap);
  }
}
