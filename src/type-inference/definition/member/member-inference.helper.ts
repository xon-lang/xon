import { InitDefinitionMemberTree } from '../../../tree/definition/definition-member/init-definition-member/init-definition-member-tree';
import { MemberTree } from '../../../tree/definition/definition-member/definition-member.tree';
import { MethodDefinitionMemberTree } from '../../../tree/definition/definition-member/method-definition-member/method-definition-member-tree';
import { OperatorDefinitionMemberTree } from '../../../tree/definition/definition-member/operator-definition-member/operator-definition-member-tree';
import { PropertyDefinitionMemberTree } from '../../../tree/definition/definition-member/property-definition-member/property-definition-member-tree';
import { GenericsMap } from '../../generics-map';
import { InitMemberInference } from './init-member/init-member.inference';
import { MemberInference } from './member.inference';
import { MethodMemberInference } from './method-member/method-member.inference.type';
import { OperatorMemberInference } from './operator-member/operator-member.inference';
import { PropertyMemberInference } from './property-member/property-member.inference';

export function getMemberInference(tree: MemberTree, genericsMap: GenericsMap): MemberInference {
  if (tree === undefined) return undefined;

  if (tree instanceof InitDefinitionMemberTree) return new InitMemberInference(tree, genericsMap);
  if (tree instanceof MethodDefinitionMemberTree) return new MethodMemberInference(tree, genericsMap);
  if (tree instanceof OperatorDefinitionMemberTree) return new OperatorMemberInference(tree, genericsMap);
  if (tree instanceof PropertyDefinitionMemberTree) return new PropertyMemberInference(tree, genericsMap);

  throw new Error(`Member type not found for "${tree.constructor.name}"`);
}
