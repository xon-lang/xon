import { parseAttribute } from '../../parse';
import { ArrayTypeTree } from '../../type/array/array-type.tree';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { AbstractAttributeTree } from './abstract-attribute-tree';

test('private value with type', () => {
  const code = '_a Integer';
  const tree = parseAttribute<AbstractAttributeTree>(code);
  expect(tree).toBeInstanceOf(AbstractAttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type).toBeInstanceOf(IdTypeTree);
});

test('array value', () => {
  const code = 'a T[]';
  const tree = parseAttribute<AbstractAttributeTree>(code);
  expect(tree).toBeInstanceOf(AbstractAttributeTree);

  expect(tree.id.text).toBe('a');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type).toBeInstanceOf(ArrayTypeTree);
});

test('operator', () => {
  const code = '+ (a Integer) Integer';
  const tree = parseAttribute<AbstractAttributeTree>(code);
  expect(tree).toBeInstanceOf(AbstractAttributeTree);

  expect(tree.id.text).toBe('+');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type).toBeInstanceOf(LambdaTypeTree);
  expect((tree.type as LambdaTypeTree).resultType).toBeInstanceOf(IdTypeTree);
});
