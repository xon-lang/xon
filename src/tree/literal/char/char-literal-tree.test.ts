import { parseLiteral } from '../../../util/parse';
import { CharLiteralTree } from './char-literal-tree';

test('char a', () => {
  const code = "'a'";
  const tree = parseLiteral(code) as CharLiteralTree;
  expect(tree).toBeInstanceOf(CharLiteralTree);

  expect(tree.value).toBe(code.replace(/'/g, ''));
});
