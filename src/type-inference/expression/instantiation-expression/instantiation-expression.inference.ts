import { InstantiationExpressionTree } from '../../../tree/expression/instantiation-expression/instantiation-expression.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { getArgumentInference } from '../../argument/argument-inference.helper';
import { ArgumentInference } from '../../argument/argument.inference';
import { findDefinitionByType } from '../../../provider/find-type-member';
import { GenericsMap } from '../../generics-map';
import { ExpressionInference } from '../expression.inference';

export class InstantiationExpressionInference extends ExpressionInference {
  public type: TypeTree;

  public arguments: ArgumentInference[];

  public constructor(public tree: InstantiationExpressionTree, public genericsMap: GenericsMap) {
    super();
    this.arguments = tree.arguments.map((x) => getArgumentInference(x, this.genericsMap));

    const argumentsTypes = this.arguments.map((x) => x.value.type);
    const typeDefinition = findDefinitionByType(tree.type);
    const argumentsGenericsEntries = typeDefinition.parameters
      .map((x, i) => x.type.getGenericsMap(argumentsTypes[i]).entries())
      .map((x) => Array.from(x))
      .flat();
    const declaredGenericsEntries = typeDefinition.declaredGenerics.map((x, i) => [
      x,
      tree.type.generics[i].useGenericsMap(this.genericsMap),
    ]);

    const genericsMap2 = (typeDefinition.declaredGenerics
      ? declaredGenericsEntries
      : argumentsGenericsEntries) as [string, TypeTree][];

    this.type = tree.type.useGenericsMap(new Map(genericsMap2));
  }
}
