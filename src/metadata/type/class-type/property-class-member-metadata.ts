import { PropertyClassMemberTree } from '../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { TypeMetadata } from '../type-metadata';

export class PropertyClassMemberMetadata {
  isPrivate: boolean;
  name: string;

  public constructor(public tree: PropertyClassMemberTree, public type: TypeMetadata) {
    this.name = tree.id.text;
    this.isPrivate = tree.isPrivate;
  }
}
