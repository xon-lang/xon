import { InitMemberTree } from '../../../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../../../tree/definition/member/member.tree';
import { GenericsMap } from '../../generics-map';
import { InitMemberType } from './init-member/init-member.type';

export function fillStatementTypes(tree: MemberTree, genericsMap: GenericsMap): void {
  if (tree instanceof InitMemberTree) new InitMemberType(tree, genericsMap).fillTypes();
  else throw new Error('Member type not found');
}
