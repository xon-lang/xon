import { LiteralExpressionTree } from '../../../../tree/expression/literal-expression/literal-expression.tree';
import { IdTypeMetadata } from '../../../type/id/id-type-metadata';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class LiteralExpressionMetadata extends ExpressionMetadata {
  type: IdTypeMetadata;

  constructor(tree: LiteralExpressionTree, scope: DeclarationScope) {
    super();
    const literalName = tree.literal.constructor.name.replace('LiteralTree', '');
    this.type = scope.get(literalName).type as IdTypeMetadata;
  }
}
