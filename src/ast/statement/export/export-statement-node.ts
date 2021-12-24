import { ExportStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class ExportStatementNode implements StatementNode {
  sourceReference: SourceReference;
  path: string;

  constructor(public ctx: ExportStatementContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    // todo check if it is member expr
    this.path = ctx._path.text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
