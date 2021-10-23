import { SourceContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getLibrariesTrees } from '../import/import-tree.helper';
import { ImportTree } from '../import/import.tree';
import { getSourceMembersTrees } from './source-member/source-member-tree.helper';
import { SourceMemberTree } from './source-member/source-member.tree';

export class SourceTree extends BaseTree {
  public imports: ImportTree[];
  public definition: Definition[];

  public constructor(public ctx?: SourceContext) {
    super();
    if (!ctx) return;

    this.imports = getLibrariesTrees(ctx.library());
    this.members = getSourceMembersTrees(ctx.sourceMember());
  }

  toString(): string {
    return `<Members ${this.members.length}>`;
  }
}
