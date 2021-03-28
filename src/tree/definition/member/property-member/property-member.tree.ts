import { PropertyMemberContext } from '../../../../grammar/xon-parser';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class PropertyMemberTree extends MemberTree {
  public name: string;

  public isPrivate: boolean;

  public type: TypeTree;

  public constructor(public ctx: PropertyMemberContext) {
    super();
    this.name = ctx.ID().text;
    this.isPrivate = this.name.startsWith('_');
    this.type = getTypeTree(ctx.type());
  }
}
