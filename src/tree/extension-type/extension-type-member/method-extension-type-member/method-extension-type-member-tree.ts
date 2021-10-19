import { MethodExtensionTypeMemberContext } from '../../../../grammar/xon-parser';
import { MethodTree } from '../../../method/method-tree';
import { ExtensionTypeMemberTree } from '../extension-type-member.tree';

export class MethodExtensionTypeMemberTree extends ExtensionTypeMemberTree {
  public method: MethodTree;

  public constructor(public ctx?: MethodExtensionTypeMemberContext) {
    super();
    if (!ctx) return;

    this.method = new MethodTree(ctx.method());
  }
}
