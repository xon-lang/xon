import { SourceContext } from '~/grammar/xon-parser';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { StatementTree } from '~/tree/statement/statement-tree';
import { getStatementTrees } from '~/tree/statement/statement-tree-helper';
import { Tree } from '~/tree/tree';
import { SourceRange } from '~/util/source-range';

export class SourceTree extends Tree {
  metadata: SourceMetadata;
  ctx?: SourceContext | null;
  sourceRange: SourceRange;
  statements: StatementTree[] = [];

  constructor(ctx?: SourceContext) {
    super();
    if (!ctx) {
      return;
    }
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.statements = getStatementTrees(ctx.statement());
    this.addChildren(...this.statements);
  }
}
