import { InheritanceMemberContext } from '../../../../grammar/xon-parser';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class InheritanceMemberTree extends MemberTree {
  type: TypeTree;

  constructor(public ctx?: InheritanceMemberContext) {
    super();
    if (!ctx) return;
    this.type = new TypeTree(ctx.type());
  }
}
