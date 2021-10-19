import { ExtensionTypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getExtensionTypeMembersTrees } from './extension-type-member/extension-type-member-tree.helper';
import { ExtensionTypeMemberTree } from './extension-type-member/extension-type-member.tree';

export class ExtensionTypeTree extends BaseTree {
  public name: string;
  public genericParameters: string[];
  public members: ExtensionTypeMemberTree[] = [];

  public constructor(public ctx?: ExtensionTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.members = getExtensionTypeMembersTrees(ctx.extensionTypeMember());
  }
}
