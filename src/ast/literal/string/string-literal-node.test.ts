import { parseLiteral } from '../../parse';
import { StringLiteralNode } from './string-literal-node';

test('single line string', () => {
  const code = '"some string"';
  const tree = parseLiteral<StringLiteralNode>(code);
  expect(tree).toBeInstanceOf(StringLiteralNode);

  expect(tree.value).toBe(code.replace(/"/g, ''));
});

test('multiline string', () => {
  const code = '"some\nmultiline\n\t\n\t\nstring\n"';
  const tree = parseLiteral<StringLiteralNode>(code);
  expect(tree).toBeInstanceOf(StringLiteralNode);

  expect(tree.value).toBe(code.replace(/"/g, ''));
});

test('empty string', () => {
  const code = '""';
  const tree = parseLiteral<StringLiteralNode>(code);
  expect(tree).toBeInstanceOf(StringLiteralNode);

  expect(tree.value).toBe('');
});
