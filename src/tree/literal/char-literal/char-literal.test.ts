import { parseLiteral } from '../../../parse';
import { CharLiteralTree } from './char-literal.tree';

test('char a', () => {
  const code = "'a'";
  const tree = parseLiteral<CharLiteralTree>(code);
  expect(tree.value).toBe(code.replace(/'/g, ''));
});
