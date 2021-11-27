import { CallExpressionTree } from '../../../tree/expression/call-expression/call-expression.tree';
import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class CallExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: CallExpressionTree, scope: DeclarationScope) {
    super();

    const expressionParameters = tree.arguments
      .map((x) => getExpressionMetadata(x, scope))
      .map((x) => x.type);
    if (tree.instance instanceof MemberExpressionTree) {
      const instanceType = getExpressionMetadata(tree.instance.instance, scope).type;
      const declaration = instanceType.declaration;
      const typeArguments = tree.instance.typeArguments.map((x) => getTypeMetadata(x, scope));
      const attribute = declaration.getMethodAttribute(
        tree.instance.id.text,
        typeArguments,
        expressionParameters,
      );
      this.type = attribute.type;
    } else {
      const instanceType = getExpressionMetadata(tree.instance, scope).type;
      if (!(instanceType instanceof FunctionTypeMetadata))
        throw new Error(`Instance type is not a function but '${instanceType.constructor.name}'`);

      this.type = instanceType.resultType;
    }
  }
}
