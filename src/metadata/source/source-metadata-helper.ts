import { SourceMetadata } from '~/metadata/source/source-metadata';
import { SourceNode } from '~/tree/expression/source/source-tree';

export function getSourceMetadata(tree: SourceNode): SourceMetadata {
  return new SourceMetadata(tree);
}
