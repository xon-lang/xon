import { parseLiteral } from '../../util/parse';
import { StringLiteralTree } from './string-literal-tree';

test('single line string', () => {
  const code = '"some string"';
  const tree = parseLiteral<StringLiteralTree>(code);
  expect(tree).toBeInstanceOf(StringLiteralTree);

  expect(tree.value).toBe(code.replace(/"/g, ''));
});

test('multiline string', () => {
  const code = '"some\nmultiline\n\t\n\t\nstring\n"';
  const tree = parseLiteral<StringLiteralTree>(code);
  expect(tree).toBeInstanceOf(StringLiteralTree);

  expect(tree.value).toBe(code.replace(/"/g, ''));
});

test('empty string', () => {
  const code = '""';
  const tree = parseLiteral<StringLiteralTree>(code);
  expect(tree).toBeInstanceOf(StringLiteralTree);

  expect(tree.value).toBe('');
});
