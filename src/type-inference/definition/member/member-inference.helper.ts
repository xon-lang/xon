import { InitMemberTree } from '../../../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../../../tree/definition/member/member.tree';
import { MethodMemberTree } from '../../../tree/definition/member/method-member/method-member.tree';
import { OperatorMemberTree } from '../../../tree/definition/member/operator-member/operator-member.tree';
import { PropertyMemberTree } from '../../../tree/definition/member/property-member/property-member.tree';
import { GenericsMap } from '../../generics-map';
import { InitMemberInference } from './init-member/init-member.inference';
import { MethodMemberInference } from './method-member/method-member.inference.type';
import { OperatorMemberInference } from './operator-member/operator-member.inference';
import { PropertyMemberInference } from './property-member/property-member.inference';

export function fillMemberTypes(tree: MemberTree, genericsMap: GenericsMap): void {
  if (tree instanceof InitMemberTree) new InitMemberInference(tree, genericsMap).fillTypes();
  else if (tree instanceof MethodMemberTree)
    new MethodMemberInference(tree, genericsMap).fillTypes();
  else if (tree instanceof OperatorMemberTree)
    new OperatorMemberInference(tree, genericsMap).fillTypes();
  else if (tree instanceof PropertyMemberTree)
    new PropertyMemberInference(tree, genericsMap).fillTypes();
  else throw new Error(`Member type not found for "${tree.constructor.name}"`);
}
