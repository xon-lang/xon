import { LibraryContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { LibraryMemberTree } from './library-member.tree';

export class LibraryTree extends BaseTree {
  scope: string;

  name: string;

  members: LibraryMemberTree[];

  constructor(public ctx: LibraryContext) {
    super();
    [this.scope, this.name] = ctx.libraryPath().text.split('/');
    this.members = ctx.libraryMember().map((x) => new LibraryMemberTree(x));
  }
}
