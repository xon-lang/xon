import { ExtensionTypeListingMemberContext } from '../../../../grammar/xon-parser';
import { getExtensionTypeTree } from '../../../extension-type/extension-type-helper';
import { ExtensionTypeTree } from '../../../extension-type/extension-type-tree';
import { ListingMemberTree } from '../listing-member.tree';

export class ExtensionTypeListingMemberTree extends ListingMemberTree {
  public extensionType: ExtensionTypeTree;

  public constructor(public ctx?: ExtensionTypeListingMemberContext) {
    super();
    if (!ctx) return;

    this.extensionType = getExtensionTypeTree(ctx.extensionType());
  }
}
