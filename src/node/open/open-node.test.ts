import { Scanner } from '~/compiler/scanner/scanner';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('open paren', () => {
  const code = '(';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.OPEN);
  expect(tokens[0].text).toBe('(');
});

test('open bracket', () => {
  const code = '[';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.OPEN);
  expect(tokens[0].text).toBe('[');
});

test('open brace', () => {
  const code = '{';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.OPEN);
  expect(tokens[0].text).toBe('{');
});
