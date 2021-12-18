import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { IndexExpressionNode } from '../../expression/index/index-expression-node';
import { parseAttribute } from '../../parse';
import { ValueAttributeNode } from './value-attribute-node';

test('value', () => {
  const code = 'a: 123';
  const tree = parseAttribute<ValueAttributeNode>(code);
  expect(tree).toBeInstanceOf(ValueAttributeNode);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type).toBe(null);
});

test('private value with type', () => {
  const code = '_a Integer: 123';
  const tree = parseAttribute<ValueAttributeNode>(code);
  expect(tree).toBeInstanceOf(ValueAttributeNode);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type).toBeInstanceOf(IdExpressionNode);
});

test('array value', () => {
  const code = 'a T[]: []';
  const tree = parseAttribute<ValueAttributeNode>(code);
  expect(tree).toBeInstanceOf(ValueAttributeNode);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type).toBeInstanceOf(IndexExpressionNode);
});
