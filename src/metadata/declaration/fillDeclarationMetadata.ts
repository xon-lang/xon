import {
  fillDefinitionMetadata,
  fillOperatorMetadata,
  fillParameterMetadata,
} from '~/metadata/declaration/declaration-metadata-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';

export function fillDeclarationMetadata(tree: DeclarationTree): void {
  if (tree.modifier?.text === 'operator') {
    fillOperatorMetadata(tree);
  } else if (tree.modifier?.text === 'model' || tree.modifier?.text === 'object') {
    fillDefinitionMetadata(tree);
  } else {
    fillParameterMetadata(tree);
  }
}
