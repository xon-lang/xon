import { Boolean } from '../../lib/core';
import { DefinitionTree } from '../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../tree/parameter/parameter-tree';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationStatementTree } from '../../tree/statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '../../tree/statement/expression/expression-statement-tree';
import { DefinitionMetadata } from '../declaration/definition/definition-metadata';
import { ParameterMetadata } from '../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getStatementMetadata } from '../statement/statement-metadata-helper';
import { getSourceMetadata } from './source-metadata-helper';

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

      const innerScope = this.scope.create();

      if (statement.declaration instanceof DefinitionTree) {
        statement.declaration.metadata = new DefinitionMetadata(statement.declaration, innerScope);
        this.scope.add(statement.declaration.metadata);
        for (const parameter of statement.declaration.parameters) {
          parameter.metadata = new ParameterMetadata(parameter, innerScope);
          innerScope.add(parameter.metadata);
        }
        const bodyScope = innerScope.create();
        if (statement.declaration.body) {
          getSourceMetadata(statement.declaration.body, bodyScope, true);
        }
        statement.declaration.metadata.attributes = bodyScope.declarations
          .filter((x) => x instanceof ParameterMetadata)
          .map((x) => x as ParameterMetadata);
      } else if (statement.declaration instanceof ParameterTree) {
        if (statement.declaration.destructure.length) {
          for (const parameter of statement.declaration.destructure) {
            parameter.metadata = new ParameterMetadata(parameter, innerScope);
            this.scope.add(parameter.metadata);
          }
        } else {
          statement.declaration.metadata = new ParameterMetadata(statement.declaration, innerScope);
          this.scope.add(statement.declaration.metadata);
          for (const parameter of statement.declaration.params) {
            parameter.metadata = new ParameterMetadata(parameter, innerScope);
            innerScope.add(parameter.metadata);
          }
        }
        // const bodyScope = innerScope.create();
        // if (statement.declaration.body) {
        //   getSourceMetadata(statement.declaration.body, bodyScope, true);
        // }
      } else if (
        statement instanceof ExpressionStatementTree &&
        statement.expression instanceof IdExpressionTree
      ) {
        this.scope.add(new ParameterMetadata(statement.expression, innerScope));
      }
    }
  }
}
