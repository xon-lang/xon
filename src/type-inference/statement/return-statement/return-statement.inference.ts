import { ReturnStatementTree } from '../../../tree/statement/return-statement/return-statement.tree';
import { fillExpressionTypes } from '../../expression/expression-inference.helper';
import { GenericsMap } from '../../generics-map';
import { StatementInference } from '../statement.inference';

export class ReturnStatementInference extends StatementInference {
  public constructor(public tree: ReturnStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    if (this.tree.value) fillExpressionTypes(this.tree.value, this.genericsMap);
  }
}
