import { Issue } from '../../../issue-service/issue';
import { CallExpressionTree } from '../../../tree/expression/call-expression/call-expression.tree';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { getArgumentInference } from '../../argument/argument-inference.helper';
import { ArgumentInference } from '../../argument/argument.inference';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class CallExpressionInference extends ExpressionInference {
  public generics: TypeTree[];

  public instance: ExpressionInference;

  public arguments: ArgumentInference[];

  public constructor(public tree: CallExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.generics = tree.generics;
    this.instance = getExpressionInference(tree.instance, this.genericsMap);

    if (!(this.instance.type instanceof FunctionTypeTree))
      throw Issue.errorFromTree(
        tree.instance,
        `Instance is "${this.instance.type.toString()}" but not a function`,
      );

    this.arguments = tree.arguments.map((x) => getArgumentInference(x, this.genericsMap));

    const argumentsGenericsEntries = this.instance.type.parameters
      .map((x, i) => x.getGenericsMap(this.arguments.map((z) => z.value.type)[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    const genericsMap2 = tree.generics
      ? this.instance.type.declaredGenerics.map((x, i) => [x, tree.generics[i]])
      : argumentsGenericsEntries;

    this.type = this.instance.type.returnType.useGenericsMap(
      new Map(genericsMap2 as [string, TypeTree][]),
    );
  }
}
