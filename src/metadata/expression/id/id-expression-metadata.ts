import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata extends ExpressionMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.tree.name.text);
  }

  attributes(): DeclarationMetadata[] {
    return this.declaration().attributes();
  }

  is(other: ExpressionMetadata): boolean {
    const currentDeclaration = this.declaration();
    const otherDeclaration = (other as IdExpressionMetadata).declaration();

    return currentDeclaration.is(otherDeclaration);
  }
}
