import { LibraryContext } from '../../grammar/xon-parser';
import { Node } from '../node';
import { ImportMemberTree } from './import-member.tree';

export class ImportTree extends Node {
  path: string;
  members?: ImportMemberTree[];

  constructor(public ctx: LibraryContext) {
    super();

    this.path = ctx.libraryPath().text;
    this.members = ctx.libraryMember()?.map((x) => new ImportMemberTree(x));
  }

  toString(): string {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
