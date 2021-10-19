import { PropertyClassTypeMemberContext } from '../../../../../../grammar/xon-parser';
import { PropertyTree } from '../../../../../property/property-tree';
import { ClassTypeMemberTree } from '../class-type-member.tree';

export class PropertyClassTypeMemberTree extends ClassTypeMemberTree {
  public property: PropertyTree;

  public constructor(public ctx?: PropertyClassTypeMemberContext) {
    super();
    if (!ctx) return;

    this.property = new PropertyTree(ctx.property());
  }
}
