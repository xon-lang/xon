import { MethodMemberTree } from '../../../../tree/definition/member/method-member/method-member.tree';
import { parseMember } from '../../../../tree/parse';
import { createPlainType } from '../../../../tree/type/type-tree.helper';
import { ExpressionStatementInference } from '../../../statement/expression-statement/expression-statement.inference';
import { getMemberInference } from '../member-inference.helper';
import { MethodMemberInference } from './method-member.inference.type';

test('has return type', () => {
  const code = 'f(a Integer) Integer:\n    a';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  const inference = getMemberInference(tree, new Map()) as MethodMemberInference;
  expect(inference.type.toString()).toBe('(Integer) Integer');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Integer');
});

test('has generics', () => {
  const code = 'f<T>(a T) T:\n    a';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  const inference = getMemberInference(
    tree,
    new Map([['T', createPlainType('Boolean')]]),
  ) as MethodMemberInference;
  expect(inference.type.toString()).toBe('<T>(Boolean) Boolean');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Boolean');
});
