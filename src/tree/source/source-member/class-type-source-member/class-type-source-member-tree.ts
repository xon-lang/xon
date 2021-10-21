import { ClassTypeSourceMemberContext } from '../../../../grammar/xon-parser';
import { getClassTypeTree } from '../../../class-type/class-type-helper';
import { ClassTypeTree } from '../../../class-type/class-type-tree';
import { SourceMemberTree } from '../source-member.tree';

export class ClassTypeSourceMemberTree extends SourceMemberTree {
  public classType: ClassTypeTree;

  public constructor(public ctx?: ClassTypeSourceMemberContext) {
    super();
    if (!ctx) return;

    this.classType = getClassTypeTree(ctx.classType());
  }
}
