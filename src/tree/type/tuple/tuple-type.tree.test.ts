import { parseType } from '../../parse';
import { IdTypeTree } from '../id/id-type.tree';
import { UnionTypeTree } from '../union/union-type.tree';
import { TupleTypeTree } from './tuple-type.tree';

test('string and union', () => {
  const code = '[String, Integer || Float]';
  const tree = parseType<TupleTypeTree>(code);
  expect(tree).toBeInstanceOf(TupleTypeTree);

  expect(tree.types.length).toBe(2);
  console.log(tree.types[0].toString());
  
  expect(tree.types[0]).toBeInstanceOf(IdTypeTree);
  expect((tree.types[0] as IdTypeTree).id.text).toBe('String');

  expect((tree.types[1] as UnionTypeTree).types[0]).toBeInstanceOf(IdTypeTree);
  expect(((tree.types[1] as UnionTypeTree).types[0] as IdTypeTree).id.text).toBe('Integer');

  expect((tree.types[1] as UnionTypeTree).types[1]).toBeInstanceOf(IdTypeTree);
  expect(((tree.types[1] as UnionTypeTree).types[1] as IdTypeTree).id.text).toBe('Float');
});
