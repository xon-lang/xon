import { DeclarationScope } from '../../../metadata/handler/new-handler/scope';
import { ClassTypeInfo } from '../../../metadata/type/class-type-info';
import { LiteralTypeInfo } from '../../../metadata/type/literal/literal-type-info';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { ExpressionInference } from '../expression.inference';

export class LiteralExpressionInference extends ExpressionInference {
  constructor(public tree: LiteralExpressionTree, scope: DeclarationScope) {
    super();

    const literalName = tree.literal.constructor.name.replace('LiteralTree', '');
    const classType = scope.get(literalName) as ClassTypeInfo;
    const literalType = new LiteralTypeInfo();
    literalType.value = tree.literal.value;
    literalType.attributes = classType.attributes;
    literalType.genericArguments = classType.genericArguments;
    literalType.name = classType.name;
    literalType.parameters = classType.parameters;
    literalType.sourceReference = classType.sourceReference;
  }
}
