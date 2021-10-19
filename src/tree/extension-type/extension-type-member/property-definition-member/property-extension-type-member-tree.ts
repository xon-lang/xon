import { PropertyExtensionTypeMemberContext } from '../../../../grammar/xon-parser';
import { PropertyTree } from '../../../property/property-tree';
import { ExtensionTypeMemberTree } from '../extension-type-member.tree';

export class PropertyExtensionTypeMemberTree extends ExtensionTypeMemberTree {
  public property: PropertyTree;

  public constructor(public ctx?: PropertyExtensionTypeMemberContext) {
    super();
    if (!ctx) return;

    this.property = new PropertyTree(ctx.property());
  }
}
