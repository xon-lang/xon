import { PropertySourceMemberContext } from '../../../../grammar/xon-parser';
import { PropertyTree } from '../../../property/property-tree';
import { SourceMemberTree } from '../source-member.tree';

export class PropertySourceMemberTree extends SourceMemberTree {
  public property: PropertyTree;

  public constructor(public ctx?: PropertySourceMemberContext) {
    super();
    if (!ctx) return;

    this.property = new PropertyTree(ctx.property());
  }
}
