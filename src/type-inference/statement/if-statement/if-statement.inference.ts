import { IfStatementTree } from '../../../tree/statement/if-statement/if-statement.tree';
import { fillExpressionTypes } from '../../expression/expression-inference.helper';
import { GenericsMap } from '../../generics-map';
import { popScope, pushScope } from '../../id-scope';
import { fillStatementTypes } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class IfStatementInference extends StatementInference {
  public constructor(public tree: IfStatementTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.condition, this.genericsMap);
    pushScope();
    this.tree.thenBody.forEach((x) => fillStatementTypes(x, this.genericsMap));
    this.tree.elseBody.forEach((x) => fillStatementTypes(x, this.genericsMap));
    popScope();
  }
}
