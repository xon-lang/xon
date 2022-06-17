import { parseBody } from '../../../util/parse';
import { MultipleBodyTree } from './multiple-body-tree';

test('two if statements', () => {
  const code = `
  if a
    123
  if b
    321`;
  const tree = parseBody(code) as MultipleBodyTree;

  expect(tree).toBeInstanceOf(MultipleBodyTree);
});
