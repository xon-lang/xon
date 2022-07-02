import { Boolean } from '../../lib/core';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { DefinitionMetadata } from '../declaration/definition/definition-metadata';
import { ParameterMetadata } from '../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(public tree: SourceTree, public scope: DeclarationScope, onlyHeaders: Boolean) {
    this.traverseHeaders();

    if (!onlyHeaders) {
      for (const statement of tree.statements) {
        statement.metadata = getStatementMetadata(statement, scope);
      }
    }
  }

  traverseHeaders() {
    for (const statement of this.tree.statements) {
      if (!(statement instanceof DeclarationStatementTree)) {
        continue;
      }
      if (
        this.scope.findOrNone(statement.declaration.name.text, (x) =>
          x.sourceRange.equals(statement.declaration.sourceRange),
        )
      ) {
        continue;
      }
      if (statement.declaration instanceof DefinitionTree) {
        this.scope.add(new DefinitionMetadata(statement.declaration));
        for (const parameter of statement.declaration.parameters) {
          this.scope.add(new ParameterMetadata(parameter));
        }
      } else if (statement.declaration instanceof ParameterTree) {
        if (statement.declaration.destructure.length) {
          for (const parameter of statement.declaration.destructure) {
            this.scope.add(new ParameterMetadata(parameter));
          }
        } else {
          this.scope.add(new ParameterMetadata(statement.declaration));
        }
        for (const parameter of statement.declaration.params) {
          this.scope.add(new ParameterMetadata(parameter));
        }
      }
    }
  }
}
