import { InitMemberTree } from '../../../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../../../tree/definition/member/member.tree';
import { MethodMemberTree } from '../../../tree/definition/member/method-member/method-member.tree';
import { GenericsMap } from '../../generics-map';
import { InitMemberType } from './init-member/init-member.type';
import { MethodMemberType } from './method-member/method-member.type';

export function fillMemberTypes(tree: MemberTree, genericsMap: GenericsMap): void {
  if (tree instanceof InitMemberTree) new InitMemberType(tree, genericsMap).fillTypes();
  else if (tree instanceof MethodMemberTree) new MethodMemberType(tree, genericsMap).fillTypes();
  else throw new Error('Member type not found');
}
