import { LiteralExpressionNode } from '../../../ast/expression/literal/literal-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata extends ExpressionMetadata {
  type: LiteralTypeMetadata;

  constructor(node: LiteralExpressionNode, scope: DeclarationScope) {
    super();
    this.type = LiteralTypeMetadata.fromNode(node.literal);
  }
}
