import { parseType } from '../../parse';
import { IdTypeTree } from '../id/id-type.tree';
import { MetaTypeTree } from './meta-type.tree';

test('has id name', () => {
  const code = 'String#Literal';
  const tree = parseType<MetaTypeTree>(code);
  expect(tree).toBeInstanceOf(MetaTypeTree);

  expect((tree as MetaTypeTree).id.text).toBe('Literal');
  expect((tree.type as IdTypeTree).id.text).toBe('String');
});
