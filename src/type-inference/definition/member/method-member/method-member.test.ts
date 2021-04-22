import { MethodMemberTree } from '../../../../tree/definition/member/method-member/method-member.tree';
import { parseMember } from '../../../../tree/parse';
import { ExpressionStatementTree } from '../../../../tree/statement/expression-statement/expression-statement.tree';
import { createPlainType } from '../../../../tree/type/type-helper';
import { fillMemberTypes } from '../member-type.helper';

test('has return type', () => {
  const code = 'f(a Integer) Integer:\n    a';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  fillMemberTypes(tree, new Map());
  expect((tree.body[0] as ExpressionStatementTree).value.type.toString()).toBe('Integer');
});

test('has generics', () => {
  const code = 'f<T>(a T) T:\n    a';
  const tree = parseMember<MethodMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodMemberTree);

  fillMemberTypes(tree, new Map([['T', createPlainType('Boolean')]]));
  expect((tree.body[0] as ExpressionStatementTree).value.type.toString()).toBe('Boolean');
});
