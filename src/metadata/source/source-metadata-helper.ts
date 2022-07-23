import { SourceTree } from '../../tree/source/source-tree';
import { SourceMetadata } from './source-metadata';

export function getSourceMetadata(tree: SourceTree): SourceMetadata {
  return new SourceMetadata(tree);
}
