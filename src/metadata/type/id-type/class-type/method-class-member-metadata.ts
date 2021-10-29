import { MethodClassMemberTree } from '../../../../tree/definition/class-definition/class-member/method-class-member/method-class-member-tree';
import { IdToken } from '../../../../tree/id-token';

export class MethodClassMemberMetadata {
  id: IdToken;
  isPrivate: boolean;
  name: string;

  public constructor(public tree: MethodClassMemberTree) {
    this.id = tree.id;
    this.name = tree.id.text;
    this.isPrivate = tree.isPrivate;
  }
}
