import { LiteralExpressionTree } from '../../../../tree/expression/literal-expression/literal-expression.tree';
import { TypeMetadata } from '../../../type/type-metadata';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: LiteralExpressionTree, scope: DeclarationScope) {
    super();
    const literalName = tree.literal.constructor.name.replace('LiteralTree', '');
    this.type = scope.get(literalName).type;
  }
}
