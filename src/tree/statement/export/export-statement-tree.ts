import { ExportStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { StatementTree } from '../statement-tree';

export class ExportStatementTree implements StatementTree {
  sourceReference: SourceReference;
  path: string;

  constructor(ctx: ExportStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    // todo check if it is member expr
    this.path = ctx._path.text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
