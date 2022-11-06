import { DeclarationTree } from '~/tree';
import {
  fillDefinitionMetadata,
  fillOperatorMetadata,
  fillParameterMetadata,
} from './declaration-metadata-helper';

export function fillDeclarationMetadata(tree: DeclarationTree): void {
  if (tree.modifier?.text === 'operator') {
    fillOperatorMetadata(tree);
  } else if (tree.modifier?.text === 'model' || tree.modifier?.text === 'object') {
    fillDefinitionMetadata(tree);
  } else {
    fillParameterMetadata(tree);
  }
}
