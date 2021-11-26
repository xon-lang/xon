import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array-type/array-type.tree';
import { FunctionTypeTree } from './function-type.tree';

test('number return function', () => {
  const code = '(s String, i Integer[]) Number';
  const tree = parseType<FunctionTypeTree>(code);
  expect(tree).toBeInstanceOf(FunctionTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].type.name).toBe('String');
  expect((tree.parameters[1].type as ArrayTypeTree).itemType.name).toBe('Integer');
  expect(tree.resultType.name).toBe('Number');
});

test('from translator-ts', () => {
  const code = '(i Integer) T';
  const tree = parseType<FunctionTypeTree>(code);
  expect(tree).toBeInstanceOf(FunctionTypeTree);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].type.name).toBe('Integer');
  expect(tree.resultType.name).toBe('T');
});
