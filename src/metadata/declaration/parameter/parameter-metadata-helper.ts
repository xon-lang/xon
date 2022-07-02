import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { DeclarationScope } from '../scope/declaration-scope';
import { ParameterMetadata } from './parameter-metadata';

export function getParameterMetadata(
  tree: ParameterTree,
  scop: DeclarationScope,
): ParameterMetadata {
  if (tree.destructure.length) {
    for (const parameter of tree.destructure) {
      parameter.metadata = new ParameterMetadata(parameter, scop);
      scop.parent.add(parameter.metadata);
    }
  } else {
    for (const parameter of tree.params) {
      parameter.metadata = new ParameterMetadata(parameter, scop);
      scop.add(parameter.metadata);
    }
  }
  return new ParameterMetadata(tree, scop);

  // const bodyScope = innerScope.create();
  // if (tree.body) {
  //   getSourceMetadata(tree.body, bodyScope, true);
  // }
}
