import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { MethodExpressionTree } from '../../../tree/expression/method-expression/method-expression.tree';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { getArgumentInference } from '../../argument/argument-inference.helper';
import { ArgumentInference } from '../../argument/argument.inference';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class MethodExpressionInference extends ExpressionInference {
  public generics: TypeTree[];

  public object: ExpressionInference;

  public arguments: ArgumentInference[];

  public constructor(public tree: MethodExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.generics = tree.generics;
    this.object = getExpressionInference(tree.object, this.genericsMap);

    if (!(this.object.type instanceof FunctionTypeTree))
      throw Issue.fromTree(
        tree.object,
        null,
        IssueLevel.Error,
        `Object is "${this.object.type.toString()}" but not a function`,
      ).toError();

    this.arguments = tree.arguments.map((x) => getArgumentInference(x, this.genericsMap));

    const argumentsGenericsEntries = this.object.type.parameters
      .map((x, i) => x.getGenericsMap(this.arguments.map((z) => z.value.type)[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    const genericsMap2 = tree.generics
      ? this.object.type.declaredGenerics.map((x, i) => [x, tree.generics[i]])
      : argumentsGenericsEntries;

    this.type = this.object.type.returnType.useGenericsMap(
      new Map(genericsMap2 as [string, TypeTree][]),
    );
  }
}
