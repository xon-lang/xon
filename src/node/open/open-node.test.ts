import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('open paren', () => {
  const code = '(';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.OPEN);
  expect(source.nodeText(tree)).toBe('(');
});

test('open bracket', () => {
  const code = '[';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.OPEN);
  expect(source.nodeText(tree)).toBe('[');
});

test('open brace', () => {
  const code = '{';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.OPEN);
  expect(source.nodeText(tree)).toBe('{');
});
