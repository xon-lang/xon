import { MemberAssignmentStatementTree } from '../../../tree/assignment/member-assignment/member-assignment-statement.tree';
import { getExpressionInference } from '../../expression/expression-inference.helper';
import { ExpressionInference } from '../../expression/expression.inference';
import { GenericsMap } from '../../generics-map';
import { addToScope } from '../../id-scope';
import { StatementInference } from '../statement.inference';

export class MemberAssignmentStatementInference extends StatementInference {
  public name: string;

  public value: ExpressionInference;

  public constructor(public tree: MemberAssignmentStatementTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.value = getExpressionInference(tree.value, genericsMap);
    this.type = this.value.type;

    addToScope(tree.name, this.type);
  }
}
