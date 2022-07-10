import { Boolean } from '../../lib/core';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '../../tree/statement/expression/expression-statement-tree';
import { getShadowDefinitionMetadata } from '../declaration/definition/definition-metadata-helper';
import { ParameterMetadata } from '../declaration/parameter/parameter-metadata';
import { getShadowParameterMetadata } from '../declaration/parameter/parameter-metadata-helper';
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

      if (statement.declaration instanceof ParameterTree && statement.declaration.modifier) {
        statement.declaration.metadata = getShadowDefinitionMetadata(
          statement.declaration,
          this.scope.create(),
        );
        statement.declaration.name.metadata = statement.declaration.metadata;
        this.scope.add(statement.declaration.metadata);
      } else if (statement.declaration instanceof ParameterTree) {
        statement.declaration.metadata = getShadowParameterMetadata(
          statement.declaration,
          (statement.declaration.destructure && this.scope) || this.scope.create(),
        );
        if (statement.declaration.name) {
          statement.declaration.name.metadata = statement.declaration.metadata;
        }
        if (statement.declaration.metadata.name) {
          this.scope.add(statement.declaration.metadata);
        }
      } else if (
        statement instanceof ExpressionStatementTree &&
        statement.expression instanceof IdExpressionTree
      ) {
        this.scope.add(new ParameterMetadata(statement.expression.name, this.scope));
      }
    }
  }
}
