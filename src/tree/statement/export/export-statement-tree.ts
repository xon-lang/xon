import { ExportStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../statement-tree';

export class ExportStatementTree implements StatementTree {
  sourceRange: SourceRange;
  path: String;

  constructor(ctx: ExportStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    // todo check if it is member expr
    this.path = ctx._path.text;
  }

  toString(): String {
    return `export ${this.path}`;
  }
}
