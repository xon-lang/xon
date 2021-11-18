import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array-type/array-type.tree';
import { IndexTypeTree } from './index-type.tree';

test('number return function', () => {
  const code = '[s String, i Integer[]] Number';
  const tree = parseType<IndexTypeTree>(code);
  expect(tree).toBeInstanceOf(IndexTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].type.name).toBe('String');
  expect((tree.parameters[1].type as ArrayTypeTree).itemType.name).toBe('Integer');
  expect(tree.returnType.name).toBe('Number');
});

test('from translator-ts', () => {
  const code = '[i Integer] T';
  const tree = parseType<IndexTypeTree>(code);
  expect(tree).toBeInstanceOf(IndexTypeTree);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].type.name).toBe('Integer');
  expect(tree.returnType.name).toBe('T');
});
