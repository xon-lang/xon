import { MethodClassTypeMemberContext } from '../../../../grammar/xon-parser';
import { MethodTree } from '../../../method/method-tree';
import { ClassTypeMemberTree } from '../class-type-member.tree';

export class MethodClassTypeMemberTree extends ClassTypeMemberTree {
  public method: MethodTree;

  public constructor(public ctx?: MethodClassTypeMemberContext) {
    super();
    if (!ctx) return;

    this.method = new MethodTree(ctx.method());
  }
}
