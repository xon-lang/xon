import { DefinitionStatementTree } from '../../../tree/statement/definition/definition-tree';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { getDeclarationMetadata } from '../../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../../scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class DefinitionStatementMetadata implements StatementMetadata {
  constructor(private tree: DefinitionStatementTree, private scope: DeclarationScope) {
    const declaration = getDeclarationMetadata(tree, scope);
    scope.add(declaration);
  }

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.tree.name.text);
  }
}
