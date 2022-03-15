import { none } from '../../lib/core';
import { parseParameter } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { InvokeExpressionTree } from '../expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ParameterTree } from './parameter-tree';

test('id type value', () => {
  const code = 'a Integer = 1';
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect((tree.name as IdExpressionTree).name.text).toBe('a');
  expect((tree.type as IdExpressionTree).name.text).toBe('Integer');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});

test('id value', () => {
  const code = 'a = 1';
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect((tree.name as IdExpressionTree).name.text).toBe('a');
  expect(tree.type).toBe(none);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});

test('id type', () => {
  const code = 'cat Animal';
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect((tree.name as IdExpressionTree).name.text).toBe('cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.value).toBe(none);
});

test('id array type', () => {
  const code = 'contexts AttributeContext[]';
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect((tree.name as IdExpressionTree).name.text).toBe('contexts');
  expect(tree.type).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.toString()).toBe('contexts AttributeContext[]');
});
