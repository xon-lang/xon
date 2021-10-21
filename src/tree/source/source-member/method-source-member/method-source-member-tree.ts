import { MethodSourceMemberContext } from '../../../../grammar/xon-parser';
import { MethodTree } from '../../../method/method-tree';
import { SourceMemberTree } from '../source-member.tree';

export class MethodSourceMemberTree extends SourceMemberTree {
  public method: MethodTree;

  public constructor(public ctx?: MethodSourceMemberContext) {
    super();
    if (!ctx) return;

    this.method = new MethodTree(ctx.method());
  }
}
