import { ArgumentTree } from '../../tree/argument/argument.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { getExpressionInference } from '../expression/expression-inference.helper';
import { ExpressionInference } from '../expression/expression.inference';
import { GenericsMap } from '../generics-map';
import { StatementInference } from '../statement/statement.inference';

export class ArgumentInference extends StatementInference {
  name?: string;
  value: ExpressionInference;
  type: TypeTree;

  constructor(public tree: ArgumentTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.id;
    this.value = getExpressionInference(tree.value, genericsMap);
    this.type = this.value.type;
  }
}
