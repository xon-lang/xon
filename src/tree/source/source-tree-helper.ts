import { SourceContext } from '~/grammar/xon-parser';
import { SourceTree } from '~/tree/source/source-tree';

export function getSourceTree(ctx: SourceContext): SourceTree {
  return new SourceTree(ctx);
}
