import { Boolean } from '../../lib/core';
import { SourceTree } from '../../tree/source/source-tree';
import { DefinitionStatementTree } from '../../tree/statement/definition/definition-statement-tree';
import { OperatorStatementTree } from '../../tree/statement/operator/operator-statement-tree';
import { ParameterStatementTree } from '../../tree/statement/parameter/parameter-statement-tree';
import { DefinitionMetadata } from '../declaration/definition/definition-metadata';
import { ParameterMetadata } from '../declaration/parameter/parameter-metadata';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { getStatementMetadata } from '../statement/statement-metadata-helper';

export class SourceMetadata {
  constructor(tree: SourceTree, scope: DeclarationScope, deepRun: Boolean = true) {
    for (const statement of tree.statements) {
      if (statement instanceof ParameterStatementTree) {
        if (
          scope.findOrNone(statement.parameter.name.text, (x) =>
            x.sourceRange.equals(statement.parameter.sourceRange),
          )
        ) {
          continue;
        }
        if (statement.parameter.name) {
          const metadata = new ParameterMetadata(
            statement.parameter.sourceRange,
            statement.parameter.name.text,
          );
          scope.add(metadata);
        } else {
          for (const parameter of statement.parameter.parameters) {
            const metadata = new ParameterMetadata(parameter.sourceRange, parameter.name.text);
            scope.add(metadata);
          }
        }
      }
      if (statement instanceof OperatorStatementTree) {
        if (
          scope.findOrNone(statement.name.text, (x) => x.sourceRange.equals(statement.sourceRange))
        ) {
          continue;
        }
        const metadata = new ParameterMetadata(statement.sourceRange, statement.name.text);
        scope.add(metadata);
      }
      if (statement instanceof DefinitionStatementTree) {
        if (
          scope.findOrNone(statement.definition.name.text, (x) =>
            x.sourceRange.equals(statement.definition.sourceRange),
          )
        ) {
          continue;
        }
        const metadata = new DefinitionMetadata(
          statement.definition.sourceRange,
          statement.definition.modifier.text,
          statement.definition.name.text,
        );
        scope.add(metadata);
      }
    }

    if (deepRun) {
      for (const statement of tree.statements) {
        statement.metadata = getStatementMetadata(statement, scope);
      }
    }
  }
}
