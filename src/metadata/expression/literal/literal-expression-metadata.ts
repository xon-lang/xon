import { LiteralExpressionNode } from '../../../tree/expression/literal/literal-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { LiteralTypeMetadata } from '../../type/literal/literal-type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata extends ExpressionMetadata {
  type: LiteralTypeMetadata;

  constructor(tree: LiteralExpressionNode, scope: DeclarationScope) {
    super();
    this.type = LiteralTypeMetadata.fromTree(tree.literal);
  }
}
