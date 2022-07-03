import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { ParameterMetadata } from '../parameter/parameter-metadata';
import { fillParameterMetadata } from '../parameter/parameter-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

export function getDefinitionMetadata(
  tree: DefinitionTree,
  scope: DeclarationScope,
): DefinitionMetadata {
  const metadata = new DefinitionMetadata(tree, scope);
  const innerScope = scope.create();

  for (const parameter of tree.parameters) {
    parameter.metadata = new ParameterMetadata(
      parameter.name.text,
      parameter.sourceRange,
      innerScope,
    );
    innerScope.add(parameter.metadata);
  }

  if (tree.body) {
    getSourceMetadata(tree.body, innerScope, true);
  }

  metadata.attributes = innerScope.declarations
    .filter((x) => x instanceof ParameterMetadata)
    .map((x) => x as ParameterMetadata);

  return metadata;
}

export function fillDefinitionMetadata(tree: DefinitionTree) {
  for (const parameter of tree.parameters) {
    fillParameterMetadata(parameter);
  }

  // todo fix base type should be TypeMetadata
  if (tree.base instanceof IdExpressionTree) {
    const baseMetadata = tree.metadata.scope.find(tree.base.name.text) as DefinitionMetadata;
    tree.base.metadata = baseMetadata;
    tree.metadata.base = baseMetadata;
  } else if (tree.base) {
    throw new Error('Not implemented');
  }

  for (const parameter of tree.body?.statements
    .filter((x) => x instanceof DeclarationStatementTree && x.declaration instanceof ParameterTree)
    .map((x) => (x as DeclarationStatementTree).declaration as ParameterTree) || []) {
    fillParameterMetadata(parameter);
  }
}
