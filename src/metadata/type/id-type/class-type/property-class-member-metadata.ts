import { PropertyClassMemberTree } from '../../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { TypeMetadata } from '../../type-metadata';

export class PropertyClassMemberMetadata {
  isPrivate: boolean;
  name: string;
  type: TypeMetadata;

  public constructor(tree: PropertyClassMemberTree) {
    this.isPrivate = tree.isPrivate;
    this.name = tree.id.text;
    this.type = tree.typeMetadata;
  }
}
