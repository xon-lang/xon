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

    [this.scope, this.name] = ctx.libraryPath().text.split('/');
    this.members = ctx.libraryMember().map((x) => new LibraryMemberTree(x));
  }

  public toString(): string {
    throw new Error(`ToString not implemented for "${this.constructor.name}"`);
  }
}
