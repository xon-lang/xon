import { PropertyClassMemberTree } from '../../../../tree/definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { IdToken } from '../../../../tree/id-token';
import { TypeMetadata } from '../../type-metadata';

export class PropertyClassMemberMetadata {
  id: IdToken;
  isPrivate: boolean;
  name: string;
  type: TypeMetadata;

  public constructor(
    tree: PropertyClassMemberTree,
    classGenericArguments: { [key: string]: TypeMetadata },
  ) {
    this.id = tree.id;
    this.name = tree.id.text;
    this.isPrivate = tree.isPrivate;
  }
}
