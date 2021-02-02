import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  name: string;

  type: TypeTree;

  constructor(public ctx: PropertyMemberContext) {
    super();
    this.name = ctx.ID().text;
    this.type = new TypeTree(ctx.type());
  }
}
