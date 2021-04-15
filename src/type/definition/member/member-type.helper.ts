import { InitMemberTree } from '../../../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../../../tree/definition/member/member.tree';
import { MethodMemberTree } from '../../../tree/definition/member/method-member/method-member.tree';
import { OperatorMemberTree } from '../../../tree/definition/member/operator-member/operator-member.tree';
import { PropertyMemberTree } from '../../../tree/definition/member/property-member/property-member.tree';
import { GenericsMap } from '../../generics-map';
import { InitMemberType } from './init-member/init-member.type';
import { MethodMemberType } from './method-member/method-member.type';
import { OperatorMemberType } from './operator-member/operator-member.type';
import { PropertyMemberType } from './property-member/property-member.type';

export function fillMemberTypes(tree: MemberTree, genericsMap: GenericsMap): void {
  if (tree instanceof InitMemberTree) new InitMemberType(tree, genericsMap).fillTypes();
  else if (tree instanceof MethodMemberTree) new MethodMemberType(tree, genericsMap).fillTypes();
  else if (tree instanceof OperatorMemberTree)
    new OperatorMemberType(tree, genericsMap).fillTypes();
  else if (tree instanceof PropertyMemberTree)
    new PropertyMemberType(tree, genericsMap).fillTypes();
  else throw new Error('Member type not found');
}
