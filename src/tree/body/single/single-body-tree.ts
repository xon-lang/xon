import { SingleBodyContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../../statement/statement-tree';
import { getStatementTree } from '../../statement/statement-tree-helper';
import { BodyTree } from '../body-tree';

export class SingleBodyTree implements BodyTree {
  sourceReference: SourceRange;
  statement: StatementTree;

  constructor(ctx: SingleBodyContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    this.statement = getStatementTree(ctx.statement());
  }

  toString(): string {
    return ` = ${this.statement}`;
  }
}
