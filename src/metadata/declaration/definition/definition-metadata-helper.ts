import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { fillParameterMetadata } from '../parameter/parameter-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

export function getDefinitionMetadata(
  tree: DefinitionTree,
  scope: DeclarationScope,
): DefinitionMetadata {
  for (const parameter of tree.parameters) {
    parameter.metadata = new ParameterMetadata(parameter.name.text, parameter.sourceRange, scope);
    scope.add(parameter.metadata);
  }

  const bodyScope = scope.create();
  if (tree.body) {
    getSourceMetadata(tree.body, bodyScope, true);
  }

  const metadata = new DefinitionMetadata(
    tree.modifier.text,
    tree.name.text,
    tree.sourceRange,
    scope,
  );
  metadata.attributes = bodyScope.declarations
    .filter((x) => x instanceof ParameterMetadata)
    .map((x) => x as ParameterMetadata);

  return metadata;
}


export function fillDefinitionMetadata(tree: DefinitionTree) {
  for (const parameter of tree.parameters) {
    fillParameterMetadata(parameter);
  }

  if (tree.base instanceof IdExpressionTree) {
    const baseMetadata = tree.metadata.scope.find(tree.base.name.text) as DefinitionMetadata;
    tree.base.metadata = baseMetadata;
    tree.metadata.base = baseMetadata;
  } else if (tree.base) {
    throw new Error('Not implemented');
  }

  for (const parameter of tree.body?.statements
    .filter((x) => x instanceof ParameterTree)
    .map((x) => x as ParameterTree) || []) {
    fillParameterMetadata(parameter);
  }
}