import { ReturnStatementTree } from '../../../tree/statement/return-statement/return-statement.tree';
import { fillExpressionTypes } from '../../expression/expression-type.helper';
import { GenericsMap } from '../../generics-map';
import { StatementType } from '../statement.type';

export class ReturnStatementType extends StatementType {
  public constructor(public tree: ReturnStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.value, this.genericsMap);
  }
}
