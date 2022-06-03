import { none } from '../../../lib/core';
import { DefinitionStatementTree } from '../../../tree/statement/definition/definition-statement-tree';
import { getDefinitionMetadata } from '../../declaration/definition/definition-metadata-helper';
import { ParameterMetadata } from '../../declaration/parameter/parameter-metadata';
import { getParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { MethodTypeMetadata } from '../../type/method/method-type-metadata';
import { StatementMetadata } from '../statement-metadata';

export class DefinitionStatementMetadata implements StatementMetadata {
  constructor(private tree: DefinitionStatementTree, private scope: DeclarationScope) {
    tree.definition.metadata = getDefinitionMetadata(tree.definition, scope);
    scope.addDefinition(tree.definition.metadata);

    if (tree.definition.parameters.length) {
      const parameters = () =>
        tree.definition.parameters.map((x) => getParameterMetadata(x, this.scope)).flat();
      const result = () => new IdTypeMetadata(() => tree.definition.metadata);
      const methodType = () => new MethodTypeMetadata(parameters, result);
      const parameter = new ParameterMetadata(
        tree.sourceRange,
        tree.definition.name.text,
        methodType,
        () => none,
      );
      this.scope.addParameter(parameter);
    }
  }
}
