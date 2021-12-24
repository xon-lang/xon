import { IndexerExpressionNode } from '../../../ast/expression/indexer/indexer-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class LambdaExpressionMetadata extends ExpressionMetadata {
  type: LambdaTypeMetadata;

  constructor(node: IndexerExpressionNode, scope: DeclarationScope) {
    super();

    // for (const parameter of node.parameters) {
    //   scope.set(new ParameterMetadata(parameter, scope));
    // }

    // this.type = new LambdaTypeMetadata(
    //   [],
    //   getExpressionMetadata(node.expression, scope).type,
    //   scope,
    // );
  }
}
