import { ClassTypeContext } from '../../../../grammar/xon-parser';
import { getParametersTrees } from '../../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getTypeTree } from '../../../type/type-tree.helper';
import { TypeTree } from '../../../type/type.tree';
import { ListingMemberTree } from '../listing-member.tree';
import { getClassTypeMembersTrees } from './class-type-member/class-type-member-tree.helper';
import { ClassTypeMemberTree } from './class-type-member/class-type-member.tree';

export class ClassTypeListingMemberTree extends ListingMemberTree {
  public name: string;
  public genericParameters: string[];
  public parameters: ParameterTree[];
  public baseType?: TypeTree;
  public members: ClassTypeMemberTree[] = [];

  public constructor(public ctx?: ClassTypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.baseType = getTypeTree(ctx.type());
    this.members = getClassTypeMembersTrees(ctx.classTypeMember());
  }
}
