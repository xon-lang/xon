import { parseLiteral } from '../../parse';
import { RegexLiteralNode } from './regex-literal-node';

test('single line string', () => {
  const code = '`abc`';
  const tree = parseLiteral<RegexLiteralNode>(code);
  expect(tree).toBeInstanceOf(RegexLiteralNode);

  expect(tree.value.test('abc')).toBe(true);
  expect(tree.value.test('abcd')).toBe(false);
});
