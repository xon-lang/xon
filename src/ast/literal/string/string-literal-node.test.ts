import { parseLiteral } from '../../parse';
import { StringLiteralNode } from './string-literal-node';

test('single line string', () => {
  const code = '"some string"';
  const node = parseLiteral<StringLiteralNode>(code);
  expect(node).toBeInstanceOf(StringLiteralNode);

  expect(node.value).toBe(code.replace(/"/g, ''));
});

test('multiline string', () => {
  const code = '"some\nmultiline\n\t\n\t\nstring\n"';
  const node = parseLiteral<StringLiteralNode>(code);
  expect(node).toBeInstanceOf(StringLiteralNode);

  expect(node.value).toBe(code.replace(/"/g, ''));
});

test('empty string', () => {
  const code = '""';
  const node = parseLiteral<StringLiteralNode>(code);
  expect(node).toBeInstanceOf(StringLiteralNode);

  expect(node.value).toBe('');
});
