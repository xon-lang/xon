import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { StatementInference } from '../statement.inference';

export class ExpressionStatementInference extends StatementInference {
  value: ExpressionInference;
  
  constructor(public tree: ExpressionStatementTree, public genericsMap: GenericsMap) {
    super();

    this.value = getExpressionInference(tree.expression, genericsMap);
  }
}
