import { ExportStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../statement-tree';

export class ExportStatementTree implements StatementTree {
  sourceReference: SourceRange;
  path: string;

  constructor(ctx: ExportStatementContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    // todo check if it is member expr
    this.path = ctx._path.text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
