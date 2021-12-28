import { ImportStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { StatementTree } from '../statement-tree';
import { ImportMemberTree } from './import-member-tree';

export class ImportStatementTree implements StatementTree {
  sourceReference: SourceReference;
  path: string;
  members?: ImportMemberTree[];

  constructor(ctx: ImportStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);

    // todo check if it is member expr
    this.path = ctx._path.text;
    this.members = ctx._members.map((x) => new ImportMemberTree(x));
  }

  toString(): string {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
