import { parseLiteral } from '../../parse';
import { CharLiteralNode } from './char-literal-node';

test('char a', () => {
  const code = "'a'";
  const tree = parseLiteral<CharLiteralNode>(code);
  expect(tree).toBeInstanceOf(CharLiteralNode);

  expect(tree.value).toBe(code.replace(/'/g, ''));
});
