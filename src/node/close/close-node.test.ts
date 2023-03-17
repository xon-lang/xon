import { Scanner } from '~/compiler/scanner/scanner';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('close paren', () => {
  const code = ')';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(')');
});

test('close bracket', () => {
  const code = ']';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(']');
});

test('close brace', () => {
  const code = '}';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe('}');
});
