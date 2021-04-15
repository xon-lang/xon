import { IfStatementTree } from '../../../tree/statement/if-statement/if-statement.tree';
import { fillExpressionTypes } from '../../expression/expression-type.helper';
import { GenericsMap } from '../../generics-map';
import { fillStatementTypes } from '../statement-type.helper';
import { StatementType } from '../statement.type';

export class IfStatementType extends StatementType {
  public constructor(public tree: IfStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.condition, this.genericsMap);
    this.tree.thenBody.forEach((x) => fillStatementTypes(x, this.genericsMap));
    this.tree.elseBody.forEach((x) => fillStatementTypes(x, this.genericsMap));
  }
}
