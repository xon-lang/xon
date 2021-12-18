import { IndexerExpressionNode } from '../../../ast/expression/indexer/indexer-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class LambdaExpressionMetadata extends ExpressionMetadata {
  type: LambdaTypeMetadata;

  constructor(tree: IndexerExpressionNode, scope: DeclarationScope) {
    super();

    // for (const parameter of tree.parameters) {
    //   scope.set(new ParameterMetadata(parameter, scope));
    // }

    // this.type = new LambdaTypeMetadata(
    //   [],
    //   getExpressionMetadata(tree.expression, scope).type,
    //   scope,
    // );
  }
}
