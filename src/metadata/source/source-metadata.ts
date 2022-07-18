import { Boolean } from '../../lib/core';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { fillShadowDeclarationMetadata } from '../declaration/declaration-metadata-helper';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(public tree: SourceTree, public scope: DeclarationScope, onlyHeaders: Boolean) {
    this.addDeclarationsToScope();

    if (!onlyHeaders) {
      for (const statement of tree.statements) {
        statement.metadata = getStatementMetadata(statement, scope);
      }
    }
  }

  addDeclarationsToScope() {
    for (const statement of this.tree.statements) {
      if (!(statement instanceof DeclarationStatementTree) || statement.declaration.metadata) {
        continue;
      }
      fillShadowDeclarationMetadata(statement.declaration, this.scope);
    }
  }
}
