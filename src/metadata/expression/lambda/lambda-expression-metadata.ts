import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionParameterMetadata } from '../../declaration/expression-parameter/expression-parameter-declaration-metadata';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class LambdaExpressionMetadata extends ExpressionMetadata {
  type: FunctionTypeMetadata;

  constructor(tree: LambdaExpressionTree, scope: DeclarationScope) {
    super();

    for (const parameter of tree.parameters) {
      scope.set(new ExpressionParameterMetadata(parameter, scope));
    }

    this.type = new FunctionTypeMetadata(
      [],
      getExpressionMetadata(tree.expression, scope).type,
      scope,
    );
  }
}
