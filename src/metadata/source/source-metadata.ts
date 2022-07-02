import { Boolean } from '../../lib/core';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '../../tree/statement/expression/expression-statement-tree';
import { getDefinitionMetadata } from '../declaration/definition/definition-metadata-helper';
import { ParameterMetadata } from '../declaration/parameter/parameter-metadata';
import { getParameterMetadata } from '../declaration/parameter/parameter-metadata-helper';
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
        statement.declaration.metadata = getDefinitionMetadata(
          statement.declaration,
          this.scope.create(),
        );
        this.scope.add(statement.declaration.metadata);
      } else if (statement.declaration instanceof ParameterTree) {
        statement.declaration.metadata = getParameterMetadata(
          statement.declaration,
          this.scope.create(),
        );
        this.scope.add(statement.declaration.metadata);
      } else if (
        statement instanceof ExpressionStatementTree &&
        statement.expression instanceof IdExpressionTree
      ) {
        this.scope.add(
          new ParameterMetadata(
            statement.expression.name.text,
            statement.sourceRange,
            this.scope.create(),
          ),
        );
      }
    }
  }
}
