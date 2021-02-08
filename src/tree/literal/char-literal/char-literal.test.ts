import { parseLiteral } from '../../../parse';
import { CharLiteralTree } from './char-literal.tree';

test('char a', () => {
  const code = "'a'";
  const tree = parseLiteral<CharLiteralTree>(code);
  expect(tree).toBeInstanceOf(CharLiteralTree);
  expect(tree.getValue()).toBe(code.replace(/'/g, ''));
});
