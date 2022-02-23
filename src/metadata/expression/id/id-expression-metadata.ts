import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata implements ExpressionMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {}

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.tree.id.name.text);
  }

  attributes(): ParameterDeclarationMetadata[] {
    return this.declaration().attributes();
  }

  is(other: ExpressionMetadata): boolean {
    const currentDeclaration = this.declaration();
    const otherDeclaration = (other as IdExpressionMetadata).declaration();

    return this.declaration().is(otherDeclaration);
  }
}
