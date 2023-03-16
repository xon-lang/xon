import { Scanner } from '~/compiler/scanner/scanner';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('close paren', () => {
  const code = ')';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.chars());
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(')');
});

test('close bracket', () => {
  const code = ']';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.chars());
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(']');
});

test('close brace', () => {
  const code = '}';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.chars());
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe('}');
});
