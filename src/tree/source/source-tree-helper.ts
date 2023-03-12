import { SourceContext } from '~/grammar/xon-parser';
import { SourceNode } from '~/tree/source/source-tree';

export function getSourceTree(ctx: SourceContext): SourceNode {
  return new SourceNode(ctx);
}
