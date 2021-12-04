import { parseType } from '../../parse';
import { TupleTypeTree } from './tuple-type.tree';

test('string and union', () => {
  const code = '[String, Integer || Float]';
  const tree = parseType<TupleTypeTree>(code);
  expect(tree).toBeInstanceOf(TupleTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.toString()).toBe('[String, Integer || Float]');
});
