import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  public name: string;

  public isPrivate: boolean;

  public type: TypeTree;

  public constructor(public ctx: PropertyMemberContext) {
    super();
    this.name = ctx.ID().text;
    this.isPrivate = !!ctx.Underscore();
    this.type = new TypeTree(ctx.type());
  }
}
