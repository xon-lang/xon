import { PropertyClassMemberTree } from '../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { DefinitionMetadata } from '../definition-metadata';

export class PropertyClassMemberMetadata {
  isPrivate: boolean;
  name: string;

  public constructor(public tree: PropertyClassMemberTree, public type: DefinitionMetadata) {
    this.name = tree.id.text;
    this.isPrivate = tree.isPrivate;
  }
}
