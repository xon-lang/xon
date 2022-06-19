import { Issue } from '../../../issue-service/issue';
import { None, none } from '../../../lib/core';
import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { getParameterMetadata } from '../parameter/parameter-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

export function getDefinitionMetadata(
  tree: DefinitionTree,
  scope: DeclarationScope,
): DefinitionMetadata {
  if (tree instanceof DefinitionTree) {
    const parameters = () => tree.parameters.map((x) => getParameterMetadata(x, scope)).flat();
    let baseDefinition: () => DefinitionMetadata | None = () => none;
    if (tree.base instanceof IdExpressionTree) {
      tree.base.metadata = () => scope.find(tree.base['name'].text) as DefinitionMetadata;
      baseDefinition = () => scope.find(tree.base['name'].text) as DefinitionMetadata;
    } else if (tree.base) {
      throw new Error('Not implemented');
    }
    const attributes = () => tree.attributes.map((x) => getParameterMetadata(x, scope)).flat();
    const metadata = new DefinitionMetadata(
      tree.sourceRange,
      tree.modifier.text,
      tree.name.text,
      parameters,
      baseDefinition,
      attributes,
    );
    return metadata;
  }

  Issue.errorFromTree(tree, `Definition metadata not found'`);
}
