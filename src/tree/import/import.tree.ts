import { LibraryContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ImportMemberTree } from './import-member.tree';

export class ImportTree extends BaseTree {
  public path: string;
  public members?: ImportMemberTree[];

  public constructor(public ctx?: LibraryContext) {
    super();
    if (!ctx) return;

    this.path = ctx.libraryPath().text;
    this.members = ctx.libraryMember()?.map((x) => new ImportMemberTree(x));
  }

  public toString(): string {
    return `import ${this.path}: ${this.members.join(', ')}`;
  }
}
