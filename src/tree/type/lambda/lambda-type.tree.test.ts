import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array/array-type.tree';
import { LambdaTypeTree } from './lambda-type.tree';

test('number return method', () => {
  const code = '(s String, i Integer[]) Number';
  const tree = parseType<LambdaTypeTree>(code);
  expect(tree).toBeInstanceOf(LambdaTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].type.name).toBe('String');
  expect((tree.parameters[1].type as ArrayTypeTree).itemType.name).toBe('Integer');
  expect(tree.resultType.name).toBe('Number');
});

test('from translator-ts', () => {
  const code = '(i Integer) T';
  const tree = parseType<LambdaTypeTree>(code);
  expect(tree).toBeInstanceOf(LambdaTypeTree);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].type.name).toBe('Integer');
  expect(tree.resultType.name).toBe('T');
});
