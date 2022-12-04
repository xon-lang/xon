import { SourceContext } from '~/grammar/xon-parser';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { SourceSpan } from '~/source/source-span';
import { StatementTree } from '~/tree/statement/statement-tree';
import { getStatementTree } from '~/tree/statement/statement-tree-helper';
import { Tree } from '~/tree/tree';

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
    this.statements = ctx.statement().map(getStatementTree);
    this.addChildren(...this.statements);
  }
}
