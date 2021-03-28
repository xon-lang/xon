import { parseType } from '../../../parse';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { MetaTypeTree } from './meta-type.tree';

test('plain meta', () => {
  const code = 'String#Literal';
  const tree = parseType<MetaTypeTree>(code);

  expect(tree).toBeInstanceOf(MetaTypeTree);
  expect(tree.metaName).toBe('Literal');
  expect((tree.type as PlainTypeTree).name).toBe('String');
});
