import { MethodClassMemberTree } from '../../../tree/definition/class-definition/class-member/method-class-member/method-class-member-tree';

export class MethodClassMemberMetadata {
  isPrivate: boolean;
  name: string;

  public constructor(public tree: MethodClassMemberTree) {
    this.name = tree.id.text;
    this.isPrivate = tree.isPrivate;
  }
}
