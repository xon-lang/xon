import { MethodListingMemberContext } from '../../../../grammar/xon-parser';
import { MethodTree } from '../../../method/method-tree';
import { ListingMemberTree } from '../listing-member.tree';

export class MethodListingMemberTree extends ListingMemberTree {
  public method: MethodTree;

  public constructor(public ctx?: MethodListingMemberContext) {
    super();
    if (!ctx) return;

    this.method = new MethodTree(ctx.method());
  }
}
