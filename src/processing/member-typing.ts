/* eslint-disable no-param-reassign */
import { IndexMemberTree } from '../tree/definition/member/index-member/index-member.tree';
import { InitMemberTree } from '../tree/definition/member/init-member/init-member.tree';
import { MemberTree } from '../tree/definition/member/member.tree';
import { MethodMemberTree } from '../tree/definition/member/method-member/method-member.tree';
import { OperatorMemberTree } from '../tree/definition/member/operator-member/operator-member.tree';
import { processStatement } from './statement-typing';
import { addToScope, popScope, pushScope } from './typing';

export function processInitMember(tree: InitMemberTree): void {
  pushScope();
  tree.statements.forEach(processStatement);
  popScope();
}

export function processIndexMember(tree: IndexMemberTree): void {
  pushScope();
  addToScope(tree.parameter.name, tree.parameter.dataType);
  tree.statements.forEach(processStatement);
  popScope();
}

export function processOperatorMember(tree: OperatorMemberTree): void {
  pushScope();
  tree.parameters.forEach((x) => addToScope(x.name, x.dataType));
  tree.statements.forEach(processStatement);
  popScope();
}

export function processMethodMember(tree: MethodMemberTree): void {
  pushScope();
  tree.parameters.forEach((x) => addToScope(x.name, x.dataType));
  tree.statements.forEach(processStatement);
  popScope();
}

export function processMember(tree: MemberTree): void {
  if (tree instanceof MethodMemberTree) processMethodMember(tree);
}
