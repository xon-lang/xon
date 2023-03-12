import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('close paren', () => {
  const code = ')';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.CLOSE);
  expect(source.nodeText(tree)).toBe(')');
});

test('close bracket', () => {
  const code = ']';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.CLOSE);
  expect(source.nodeText(tree)).toBe(']');
});

test('close brace', () => {
  const code = '}';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.CLOSE);
  expect(source.nodeText(tree)).toBe('}');
});
