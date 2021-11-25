import { findDefinition } from '../../../provider/find-type-member';
import { InstantiationExpressionTree } from '../../../tree/expression/instantiation-expression/instantiation-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { getArgumentInference } from '../../argument/argument-inference.helper';
import { ArgumentInference } from '../../argument/argument.inference';
import { GenericsMap } from '../../generics-map';
import { ExpressionInference } from '../expression.inference';

export class InstantiationExpressionInference extends ExpressionInference {
  name: string;
  genericArguments: TypeTree[];
  arguments: ArgumentInference[];

  constructor(public tree: InstantiationExpressionTree, public genericsMap: GenericsMap) {
    super();
    this.arguments = tree.arguments.map((x) => getArgumentInference(x, this.genericsMap));
    this.genericArguments = tree.genericArguments;

    const argumentsTypes = this.arguments.map((x) => x.value.type);
    const typeDefinition = findDefinition(tree.id);
    const argumentsGenericsEntries = typeDefinition.parameters
      .map((x, i) => x.type.getGenericsMap(argumentsTypes[i]).entries())
      .map((x) => Array.from(x))
      .flat();
    const genericParametersEntries = typeDefinition.genericParameters.map((x, i) => [
      x,
      tree.type.genericArguments[i].useGenericsMap(this.genericsMap),
    ]);

    const genericsMap2 = (
      typeDefinition.genericParameters ? genericParametersEntries : argumentsGenericsEntries
    ) as [string, TypeTree][];

    this.type = tree.type.useGenericsMap(new Map(genericsMap2));
  }
}
