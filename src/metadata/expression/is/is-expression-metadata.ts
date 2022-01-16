import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';
import { IdExpressionMetadata } from '../id/id-expression-metadata';

export class IsExpressionMetadata implements ExpressionMetadata {
  constructor(private node: InfixExpressionTree, private scope: DeclarationScope) {}

  attributes(): DeclarationMetadata[] {
    return this.scope.core.boolean.attributes();
  }

  is(other: ExpressionMetadata): boolean {
    if (other instanceof IdExpressionMetadata) {
      return this.scope.core.boolean.is(other.declaration());
    }
    return false;
  }
}
