import { SourceMetadata } from '~/metadata';
import { SourceTree } from '~/tree';

export function getSourceMetadata(tree: SourceTree): SourceMetadata {
  return new SourceMetadata(tree);
}
