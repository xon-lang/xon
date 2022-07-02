import { Boolean } from '../../lib/core';
import { SourceTree } from '../../tree/source/source-tree';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { SourceMetadata } from './source-metadata';

export function getSourceMetadata(
  tree: SourceTree,
  scope: DeclarationScope,
  onlyHeaders: Boolean = false,
): SourceMetadata {
  return new SourceMetadata(tree, scope, onlyHeaders);
}
