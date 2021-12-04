import { parseType } from '../../parse';
import { MetaTypeTree } from './meta-type.tree';

test('has id name', () => {
  const code = 'String#Literal';
  const tree = parseType<MetaTypeTree>(code);
  expect(tree).toBeInstanceOf(MetaTypeTree);

  expect(tree.name).toBe('String');
});
