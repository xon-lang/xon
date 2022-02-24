import { SourceContext } from '../../grammar/xon-parser';
import { Metadata } from '../../metadata/metadata';
import { SourceTree } from '../../tree/source/source-tree';

export class SourceNode {
  context: SourceContext;
  tree: SourceTree;
  metadata: Metadata;
}
