import { InitMemberTree } from '../../../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../../../tree/definition/member/member.tree';
import { MethodMemberTree } from '../../../tree/definition/member/method-member/method-member.tree';
import { OperatorMemberTree } from '../../../tree/definition/member/operator-member/operator-member.tree';
import { PropertyMemberTree } from '../../../tree/definition/member/property-member/property-member.tree';
import { TestMemberTree } from '../../../tree/definition/member/test-member/test-member.tree';
import { GenericsMap } from '../../generics-map';
import { InitMemberInference } from './init-member/init-member.inference';
import { MemberInference } from './member.inference';
import { MethodMemberInference } from './method-member/method-member.inference.type';
import { OperatorMemberInference } from './operator-member/operator-member.inference';
import { PropertyMemberInference } from './property-member/property-member.inference';
import { TestMemberInference } from './test-member/test-member.inference.type';

export function getMemberInference(tree: MemberTree, genericsMap: GenericsMap): MemberInference {
  if (tree === undefined) return undefined;

  if (tree instanceof InitMemberTree) return new InitMemberInference(tree, genericsMap);
  if (tree instanceof MethodMemberTree) return new MethodMemberInference(tree, genericsMap);
  if (tree instanceof OperatorMemberTree) return new OperatorMemberInference(tree, genericsMap);
  if (tree instanceof PropertyMemberTree) return new PropertyMemberInference(tree, genericsMap);
  if (tree instanceof TestMemberTree) return new TestMemberInference(tree, genericsMap);

  throw new Error(`Member type not found for "${tree.constructor.name}"`);
}
