import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { PipeExpressionTree } from '../../../tree/expression/pipe-expression/pipe-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class PipeExpressionMetadata extends ExpressionMetadata {
  type: FunctionTypeMetadata;

  constructor(tree: PipeExpressionTree, scope: DeclarationScope) {
    super();

    // this.type = ;
  }
}
