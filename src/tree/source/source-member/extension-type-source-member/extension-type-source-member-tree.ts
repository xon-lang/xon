import { ExtensionTypeSourceMemberContext } from '../../../../grammar/xon-parser';
import { getExtensionTypeTree } from '../../../extension-type/extension-type-helper';
import { ExtensionTypeTree } from '../../../extension-type/extension-type-tree';
import { SourceMemberTree } from '../source-member.tree';

export class ExtensionTypeSourceMemberTree extends SourceMemberTree {
  public extensionType: ExtensionTypeTree;

  public constructor(public ctx?: ExtensionTypeSourceMemberContext) {
    super();
    if (!ctx) return;

    this.extensionType = getExtensionTypeTree(ctx.extensionType());
  }
}
