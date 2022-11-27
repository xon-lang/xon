import { SourceContext } from '~/grammar/xon-parser';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { StatementTree } from '~/tree/statement/statement-tree';
import { getStatementTrees } from '~/tree/statement/statement-tree-helper';
import { Tree } from '~/tree/tree';
import { SourceSpan } from '~/util/source/source-span';

export class SourceTree extends Tree {
  metadata: SourceMetadata | null = null;
  ctx: SourceContext | null = null;
  sourceSpan!: SourceSpan;
  statements: StatementTree[] = [];

  constructor(ctx: SourceContext | null) {
    super();
    if (!ctx) {
      return;
    }
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.statements = getStatementTrees(ctx.statement());
    this.addChildren(...this.statements);
  }
}
