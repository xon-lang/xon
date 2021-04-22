import { IfStatementTree } from '../../../tree/statement/if-statement/if-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { popScope, pushScope } from '../../id-scope';
import { getStatementInference } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class IfStatementInference extends StatementInference {
  public condition: ExpressionInference;

  public thenBody: StatementInference[];

  public elseBody: StatementInference[];

  public constructor(public tree: IfStatementTree, public genericsMap: GenericsMap) {
    super();

    this.condition = getExpressionInference(tree.condition, genericsMap);

    pushScope();
    this.thenBody = tree.thenBody.map((x) => getStatementInference(x, genericsMap));
    this.elseBody = tree.elseBody.map((x) => getStatementInference(x, genericsMap));
    popScope();
  }
}
