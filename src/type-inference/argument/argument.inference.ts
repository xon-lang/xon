import { ArgumentTree } from '../../tree/argument/argument.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { getExpressionInference } from '../expression/expression-inference.helper';
import { ExpressionInference } from '../expression/expression.inference';
import { GenericsMap } from '../generics-map';
import { StatementInference } from '../statement/statement.inference';

export class ArgumentInference extends StatementInference {
  public name?: string;

  public value: ExpressionInference;

  public type: TypeTree;

  public constructor(public tree: ArgumentTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.value = getExpressionInference(tree.value, genericsMap);
    this.type = this.value.type;
  }
}
