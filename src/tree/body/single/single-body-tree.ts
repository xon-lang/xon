import { SingleBodyContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { StatementTree } from '../../statement/statement-tree';
import { getStatementTree } from '../../statement/statement-tree-helper';
import { BodyTree } from '../body-tree';

export class SingleBodyTree implements BodyTree {
  sourceReference: SourceReference;
  statement: StatementTree;

  constructor(ctx: SingleBodyContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.statement = getStatementTree(ctx.statement());
  }

  toString(): string {
    return ` = ${this.statement}`;
  }
}
