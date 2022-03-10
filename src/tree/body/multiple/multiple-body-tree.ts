import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../../statement/statement-tree';
import { getStatementTrees } from '../../statement/statement-tree-helper';
import { BodyTree } from '../body-tree';

export class MultipleBodyTree implements BodyTree {
  sourceRange: SourceRange;
  statements: StatementTree[];

  constructor(ctx: MultipleBodyContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.statements = getStatementTrees(ctx.statement());
  }

  toString(): string {
    return '\n' + this.statements.join('\n').replace(/^(.+)/gm, '  $1');
  }
}
