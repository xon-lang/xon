import { ImportStatementContext } from '../../../grammar/xon-parser';
import { Node } from '../../node';
import { ImportMemberNode } from './import-member-node';

export class ImportStatementNode extends Node {
  path: string;
  members?: ImportMemberNode[];

  constructor(public ctx: ImportStatementContext) {
    super();

    // todo check if it is member expr
    this.path = ctx._path.text;
    this.members = ctx._members.map((x) => new ImportMemberNode(x));
  }

  toString(): string {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
