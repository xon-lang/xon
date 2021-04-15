import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array-type/array-type.tree';
import { ActionTypeTree } from './action-type.tree';

test('number return function', () => {
  const code = '(String, Integer[])';
  const tree = parseType<ActionTypeTree>(code);
  expect(tree).toBeInstanceOf(ActionTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].name).toBe('String');
  expect((tree.parameters[1] as ArrayTypeTree).itemType.name).toBe('Integer');
});
