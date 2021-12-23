import { parseLiteral } from '../../parse';
import { CharLiteralNode } from './char-literal-node';

test('char a', () => {
  const code = "'a'";
  const node = parseLiteral<CharLiteralNode>(code);
  expect(node).toBeInstanceOf(CharLiteralNode);

  expect(node.value).toBe(code.replace(/'/g, ''));
});
