import { parseMember } from '../../../../parse';
import { LiteralExpressionTree } from '../../../expression/literal-expression/literal-expression.tree';
import { ExpressionStatementTree } from '../../../statement/expression-statement/expression-statement.tree';
import { GenericTypeTree } from '../../../type/generic-type/generic-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { PropertyMemberTree } from './property-member.tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseMember<PropertyMemberTree>(code);
  tree.body();

  expect(tree.name).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect((tree.getType() as GenericTypeTree).mainType.name).toBe('Array');
  expect(((tree.getType() as GenericTypeTree).generics[0] as PlainTypeTree).name).toBe('String');
  expect(tree.body()).toBeUndefined();
});

test('private integer', () => {
  const code = '_a Integer';
  const tree = parseMember<PropertyMemberTree>(code);
  tree.body();

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
  expect(tree.body()).toBeUndefined();
});

test('integer value', () => {
  const code = '_a Integer =  9';
  const tree = parseMember<PropertyMemberTree>(code);
  tree.body();

  expect(tree.name).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
  expect(
    ((tree.body()[0] as ExpressionStatementTree).value as LiteralExpressionTree).literal.value,
  ).toBe(9);
});
