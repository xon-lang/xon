import { none } from '../../../lib/core';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { DeclarationScope } from '../scope/declaration-scope';
import { ParameterMetadata } from './parameter-metadata';

export function getParameterMetadata(
  tree: ParameterTree,
  scope: DeclarationScope,
): ParameterMetadata {
  if (tree.destructure.length) {
    for (const parameter of tree.destructure) {
      parameter.metadata = new ParameterMetadata(parameter.name.text, parameter.sourceRange, scope);
      scope.parent.add(parameter.metadata);
    }
  } else {
    for (const parameter of tree.params) {
      parameter.metadata = new ParameterMetadata(parameter.name.text, parameter.sourceRange, scope);
      scope.add(parameter.metadata);
    }
  }

  if (tree.body) {
    getSourceMetadata(tree.body, scope, true);
  }

  return new ParameterMetadata(tree.name?.text || none, tree.sourceRange, scope);
}
