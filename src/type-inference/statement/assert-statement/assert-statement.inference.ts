import { AssertStatementTree } from '../../../tree/statement/assert-statement/assert-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { StatementInference } from '../statement.inference';

export class AssertStatementInference extends StatementInference {
  public actual: ExpressionInference;

  public expect: ExpressionInference;

  public constructor(public tree: AssertStatementTree, public genericsMap: GenericsMap) {
    super();

    this.actual = getExpressionInference(tree.actual, genericsMap);
    this.expect = getExpressionInference(tree.expect, genericsMap);
  }
}
