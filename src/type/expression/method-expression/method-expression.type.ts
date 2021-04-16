import { Issue } from '../../../issue-service/issue';
import { IssueLevel } from '../../../issue-service/issue-level';
import { MethodExpressionTree } from '../../../tree/expression/method-expression/method-expression.tree';
import { ActionTypeTree } from '../../../tree/type/action-type/action-type.tree';
import { FunctionTypeTree } from '../../../tree/type/function-type/function-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { GenericsMap } from '../../generics-map';
import { getExpressionType } from '../expression-type.helper';
import { ExpressionType } from '../expression.type';

export class MethodExpressionType extends ExpressionType {
  public constructor(public tree: MethodExpressionTree, public genericsMap: GenericsMap) {
    super();
  }

  public type(): TypeTree {
    const objectType = getExpressionType(this.tree.object, this.genericsMap);
    if (objectType instanceof ActionTypeTree) return null;
    if (!(objectType instanceof FunctionTypeTree))
      throw Issue.fromTree(
        this.tree.object,
        null,
        IssueLevel.Error,
        `Object is "${objectType.toString()}" but not a function or an action`,
      ).toError();

    const argumentsTypes = this.tree.arguments.map((x) =>
      getExpressionType(x.value, this.genericsMap),
    );

    const argumentsGenericsEntries = objectType.parameters
      .map((x, i) => x.getGenericsMap(argumentsTypes[i]).entries())
      .map((x) => Array.from(x))
      .flat();

    const genericsMap = this.tree.generics
      ? objectType.declaredGenerics.map((x, i) => [x, this.tree.generics[i]])
      : argumentsGenericsEntries;

    return objectType.returnType.useGenericsMap(new Map(genericsMap as [string, TypeTree][]));
  }
}
