import { ImportStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';
import { ImportMemberNode } from './import-member-node';

export class ImportStatementNode implements StatementNode {
  sourceReference: SourceReference;
  path: string;
  members?: ImportMemberNode[];

  constructor(public ctx: ImportStatementContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);

    // todo check if it is member expr
    this.path = ctx._path.text;
    this.members = ctx._members.map((x) => new ImportMemberNode(x));
  }

  toString(): string {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
