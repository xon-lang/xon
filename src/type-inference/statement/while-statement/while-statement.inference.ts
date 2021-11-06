import { WhileStatementTree } from '../../../tree/statement/while-statement/while-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { popScope, pushScope } from '../../id-scope';
import { getStatementInference } from '../statement-inference.helper';
import { StatementInference } from '../statement.inference';

export class WhileStatementInference extends StatementInference {
  expression: ExpressionInference;

  body: StatementInference[];

  constructor(public tree: WhileStatementTree, public genericsMap: GenericsMap) {
    super();

    this.expression = getExpressionInference(tree.expression, this.genericsMap);
    pushScope();
    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
