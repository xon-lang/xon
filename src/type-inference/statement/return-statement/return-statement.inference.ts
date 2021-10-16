import { ReturnStatementTree } from '../../../tree/statement/return-statement/return-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { StatementInference } from '../statement.inference';

export class ReturnStatementInference extends StatementInference {
  public value?: ExpressionInference;

  public constructor(public tree: ReturnStatementTree, public genericsMap: GenericsMap) {
    super();

    this.value = getExpressionInference(tree.value, this.genericsMap) || null;
  }
}
