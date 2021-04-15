import { AssignmentStatementTree } from '../../../tree/statement/assignment-statement/assignment-statement.tree';
import { getExpressionType } from '../../expression/expression-type.helper';
import { GenericsMap } from '../../generics-map';
import { StatementType } from '../statement.type';

export class AssignmentStatementType extends StatementType {
  public constructor(public tree: AssignmentStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.value.type = getExpressionType(this.tree.value, this.genericsMap);

    if (this.tree.type) this.tree.type = this.tree.type.useGenericsMap(this.genericsMap);
    else this.tree.type = this.tree.value.type;
  }
}
