import { parseLiteral } from '../../parse';
import { RegexLiteralNode } from './regex-literal-node';

test('single line string', () => {
  const code = '`abc`';
  const node = parseLiteral<RegexLiteralNode>(code);
  expect(node).toBeInstanceOf(RegexLiteralNode);

  expect(node.value.test('abc')).toBe(true);
  expect(node.value.test('abcd')).toBe(false);
});
