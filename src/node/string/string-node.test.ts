import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('single line string', () => {
  const code = `'some string'`;
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.STRING);
  expect(source.nodeText(tree)).toBe(code);
});

test('multiline string', () => {
  const code = `'some\nmultiline\n\t\n\t\nstring\n'`;
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.STRING);
  expect(source.nodeText(tree)).toBe(code);
});

test('empty string', () => {
  const code = `''`;
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.STRING);
  expect(source.nodeText(tree)).toBe(code);
});
