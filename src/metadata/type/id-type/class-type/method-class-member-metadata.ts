import { MethodClassMemberTree } from '../../../../tree/definition/class-definition/class-member/method-class-member/method-class-member-tree';
import { IdToken } from '../../../../tree/id-token';
import { TypeMetadata } from '../../type-metadata';

export class MethodClassMemberMetadata {
  id: IdToken;
  isPrivate: boolean;
  name: string;

  public constructor(
    tree: MethodClassMemberTree,
    classGenericArguments: { [key: string]: TypeMetadata },
  ) {
    this.id = tree.id;
    this.name = tree.id.text;
    this.isPrivate = tree.isPrivate;
  }
}
