import { AttributeClassMemberTree } from '../../../../tree/definition/class-definition/class-member/attribute-class-member/attribute-class-member-tree';
import { TypeMetadata } from '../../type-metadata';

export class AttributeClassMemberMetadata {
  isPrivate: boolean;
  name: string;
  type: TypeMetadata;

  public constructor(tree: AttributeClassMemberTree) {
    this.isPrivate = tree.attribute.isPrivate;
    this.name = tree.attribute.id.text;
    this.type = tree.attribute.typeMetadata;
  }
}
