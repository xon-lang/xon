import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class LambdaExpressionMetadata extends ExpressionMetadata {
  type: FunctionTypeMetadata;

  constructor(tree: LambdaExpressionTree, scope: DeclarationScope) {
    super();

    for (const parameter of tree.parameters) {
      const type = getTypeMetadata(parameter.type, scope);
      scope.set(new AttributeDeclarationMetadata(parameter.id.text, type, scope));
    }

    this.type = new FunctionTypeMetadata(
      [],
      getExpressionMetadata(tree.expression, scope).type,
      scope,
    );
  }
}
