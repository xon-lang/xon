import { SourceContext } from '~/grammar';
import { SourceMetadata } from '~/metadata';
import { getStatementTrees, StatementTree, Tree } from '~/tree';
import { SourceRange } from '~/util';

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
