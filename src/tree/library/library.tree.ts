import { LibraryContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { LibraryMemberTree } from './library-member.tree';

export class LibraryTree extends BaseTree {
  public scope: string;

  public name: string;

  public members: LibraryMemberTree[];

  public constructor(public ctx?: LibraryContext) {
    super();
    if (!ctx) return;

    this.scope = ctx._scope.text;
    this.name = ctx._name.text;
    this.members = ctx.libraryMember().map((x) => new LibraryMemberTree(x));
  }

  public toString(): string {
    return `${this.scope}.${this.name}: ${this.members.map((x) => x.toString()).join(', ')}`;
  }
}
