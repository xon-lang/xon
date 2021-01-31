import { ImportsContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ImportMemberTree } from './import-member.tree';

export class ImportsTree extends BaseTree {
  scopeName: string;

  libName: string;

  members: ImportMemberTree[];

  constructor(public ctx: ImportsContext) {
    super();
    [this.scopeName, this.libName] = ctx.importPath().text.split('/');
    this.members = ctx.importMember().map((x) => new ImportMemberTree(x));
  }
}
