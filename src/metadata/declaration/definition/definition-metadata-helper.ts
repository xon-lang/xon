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
  try {
    if (tree instanceof DefinitionTree) {
      const parameters = () => tree.parameters.map((x) => getParameterMetadata(x, scope)).flat();
      let baseDefinition: () => DefinitionMetadata | None = () => none;
      if (tree.base instanceof IdExpressionTree) {
        baseDefinition = () => scope.findDefinitionByName(tree.base['name'].text);
      } else {
        throw new Error('Not implemented');
      }
      const attributes = () => tree.attributes.map((x) => getParameterMetadata(x, scope)).flat();
      const metadata = new DefinitionMetadata(
        tree.sourceRange,
        tree.name.text,
        parameters,
        baseDefinition,
        attributes,
      );
      return metadata;
    }

    throw `Definition metadata not found'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
