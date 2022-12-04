import { BodyContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { Tree } from '~/tree/tree';

export class BodyTree extends Tree {
  ctx: BodyContext;
  source: SourceTree;

  get statements(): StatementTree[] {
    return this.source.statements;
  }

  constructor(ctx: BodyContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.source = getSourceTree(ctx.source());
    this.addChildren(this.source);
  }
}
