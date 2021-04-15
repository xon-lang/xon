import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { getExpressionType } from '../../expression/expression-type.helper';
import { GenericsMap } from '../../generics-map';
import { StatementType } from '../statement.type';

export class ExpressionStatementType extends StatementType {
  public constructor(public tree: ExpressionStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.value.type = getExpressionType(this.tree.value, this.genericsMap);
  }
}
