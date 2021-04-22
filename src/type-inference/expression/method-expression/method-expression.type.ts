import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { MethodExpressionTree } from '../../../tree/expression/method-expression/method-expression.tree';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { fillExpressionTypes } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class MethodExpressionType extends ExpressionType {
  public constructor(public tree: MethodExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public fillTypes(): void {
    fillExpressionTypes(this.tree.object, this.genericsMap);

    if (!(this.tree.object.type instanceof FunctionTypeTree))
      throw Issue.fromTree(
        this.tree.object,
        null,
        IssueLevel.Error,
        `Object is "${this.tree.object.type.toString()}" but not a function`,
      ).toError();

    this.tree.arguments.forEach((x) => fillExpressionTypes(x.value, this.genericsMap));

    const argumentsGenericsEntries = this.tree.object.type.parameters
      .map((x, i) => x.getGenericsMap(this.tree.arguments.map((z) => z.value.type)[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    const genericsMap = this.tree.generics
      ? this.tree.object.type.declaredGenerics.map((x, i) => [x, this.tree.generics[i]])
      : argumentsGenericsEntries;

    this.tree.type = this.tree.object.type.returnType.useGenericsMap(
      new Map(genericsMap as [string, TypeTree][]),
    );
  }
}
