import { SourceMetadata } from '~/metadata/source/source-metadata';
import { SourceTree } from '~/tree/source/source-tree';

export function getSourceMetadata(tree: SourceTree): SourceMetadata {
  return new SourceMetadata(tree);
}
