import { InstantiationExpressionTree } from '../../../tree/expression/instantiation-expression/instantiation-expression.tree';
import { PlainTypeTree } from '../../../tree/type/plain-type/plain-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { findDefinitionByType } from '../../find-type-member';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class InstantiationExpressionInference extends ExpressionInference {
  public constructor(public tree: InstantiationExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    this.tree.arguments.forEach((x) => fillExpressionTypes(x.value, this.genericsMap));
    const argumentsTypes = this.tree.arguments.map((x) => x.value.type);

    const type = this.tree.type as PlainTypeTree;
    const typeDefinition = findDefinitionByType(type);
    const argumentsGenericsEntries = typeDefinition.parameters
      .map((x, i) => x.type.getGenericsMap(argumentsTypes[i]).entries())
      .map((x) => Array.from(x))
      .flat();
    const declaredGenericsEntries = typeDefinition.declaredGenerics.map((x, i) => [
      x,
      this.tree.type.generics[i].useGenericsMap(this.genericsMap),
    ]);

    const genericsMap = (typeDefinition.declaredGenerics
      ? declaredGenericsEntries
      : argumentsGenericsEntries) as [string, TypeTree][];

    this.tree.type = this.tree.type.useGenericsMap(new Map(genericsMap));
  }
}
