import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class LambdaExpressionMetadata extends ExpressionMetadata {
  type: FunctionTypeMetadata;

  constructor(tree: LambdaExpressionTree, scope: DeclarationScope) {
    super();

    this.type = new FunctionTypeMetadata(
      [],
      getExpressionMetadata(tree.expression, scope).type,
      scope,
    );
  }
}
