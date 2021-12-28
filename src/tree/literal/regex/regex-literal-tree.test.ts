import { parseLiteral } from '../../../util/parse';
import { RegexLiteralTree } from './regex-literal-tree';

test('single line string', () => {
  const code = '`abc`';
  const tree = parseLiteral(code) as RegexLiteralTree;
  expect(tree).toBeInstanceOf(RegexLiteralTree);

  expect(tree.value.test('abc')).toBe(true);
  expect(tree.value.test('abcd')).toBe(false);
});
