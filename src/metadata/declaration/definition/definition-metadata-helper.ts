import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { DeclarationScope } from '../scope/declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

export function getDefinitionMetadata(
  tree: DefinitionTree,
  scope: DeclarationScope,
): DefinitionMetadata {
  for (const parameter of tree.parameters) {
    parameter.metadata = new ParameterMetadata(parameter, scope);
    scope.add(parameter.metadata);
  }

  const bodyScope = scope.create();
  if (tree.body) {
    getSourceMetadata(tree.body, bodyScope, true);
  }

  const metadata = new DefinitionMetadata(tree, scope);
  metadata.attributes = bodyScope.declarations
    .filter((x) => x instanceof ParameterMetadata)
    .map((x) => x as ParameterMetadata);

  return metadata;
}
