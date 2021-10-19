import { ClassTypeListingMemberContext } from '../../../../grammar/xon-parser';
import { getClassTypeTree } from '../../../class-type/class-type-helper';
import { ClassTypeTree } from '../../../class-type/class-type-tree';
import { ListingMemberTree } from '../listing-member.tree';

export class ClassTypeListingMemberTree extends ListingMemberTree {
  public classType: ClassTypeTree;

  public constructor(public ctx?: ClassTypeListingMemberContext) {
    super();
    if (!ctx) return;

    this.classType = getClassTypeTree(ctx.classType());
  }
}
