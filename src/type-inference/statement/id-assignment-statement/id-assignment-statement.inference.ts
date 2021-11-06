import { IdAssignmentStatementTree } from '../../../tree/statement/id-assignment-statement/id-assignment-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { addToScope } from '../../id-scope';
import { StatementInference } from '../statement.inference';

export class IdAssignmentStatementInference extends StatementInference {
  name: string;

  value: ExpressionInference;

  constructor(public tree: IdAssignmentStatementTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.value = getExpressionInference(tree.value, genericsMap);
    this.type = tree.type ? tree.type.useGenericsMap(genericsMap) : this.value.type;

    addToScope(tree.name, this.type);
  }
}
