import { AssignmentStatementTree } from '../../../tree/statement/assignment-statement/assignment-statement.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { addToScope } from '../../id-scope';
import { StatementInference } from '../statement.inference';

export class AssignmentStatementInference extends StatementInference {
  public name: string;

  public value: ExpressionInference;

  public type: TypeTree;

  public constructor(public tree: AssignmentStatementTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.value = getExpressionInference(tree.value, genericsMap);
    this.type = tree.type ? tree.type.useGenericsMap(genericsMap) : this.value.type;

    addToScope(tree.name, this.type);
  }
}
