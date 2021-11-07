import { AttributeClassMemberContext } from '../../../../../grammar/xon-parser';
import { AttributeTree } from '../../../../attribute/attribute-tree';
import { getAttributeTree } from '../../../../attribute/attribute-tree.helper';
import { ClassMemberTree } from '../class-member.tree';

export class AttributeClassMemberTree extends ClassMemberTree {
  attribute: AttributeTree;

  constructor(public ctx?: AttributeClassMemberContext) {
    super();
    if (!ctx) return;

    this.attribute = getAttributeTree(ctx.attribute());
  }

  static fromAttribute(attribute: AttributeTree): AttributeClassMemberTree {
    const member = new AttributeClassMemberTree();
    member.attribute = attribute;
    return member;
  }
}


