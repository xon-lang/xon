import { SourceContext } from '../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { StatementTree } from '../statement/statement-tree';
import { getStatementTrees } from '../statement/statement-tree-helper';
import { Tree } from '../tree';

export class SourceTree implements Tree {
  sourceReference: SourceReference;
  statements: StatementTree[] = [];

  constructor(ctx: SourceContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.statements = getStatementTrees(ctx.statement());
  }

  toString(): string {
    return this.statements.join('\n\n');
  }
}
