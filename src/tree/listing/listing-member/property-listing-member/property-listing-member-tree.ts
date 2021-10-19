import { PropertyListingMemberContext } from '../../../../grammar/xon-parser';
import { PropertyTree } from '../../../property/property-tree';
import { ListingMemberTree } from '../listing-member.tree';

export class PropertyListingMemberTree extends ListingMemberTree {
  public property: PropertyTree;

  public constructor(public ctx?: PropertyListingMemberContext) {
    super();
    if (!ctx) return;

    this.property = new PropertyTree(ctx.property());
  }
}
