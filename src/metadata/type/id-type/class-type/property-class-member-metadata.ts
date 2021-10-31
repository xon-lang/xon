import { AttributeClassMemberTree } from '../../../../tree/definition/class-definition/class-member/attribute-class-member/attribute-class-member-tree';
import { TypeMetadata } from '../../type-metadata';

export class PropertyClassMemberMetadata {
  isPrivate: boolean;
  name: string;
  type: TypeMetadata;

  public constructor(tree: AttributeClassMemberTree) {
    this.isPrivate = tree.isPrivate;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
