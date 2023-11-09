import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

test('close paren', () => {
  const text = ')';
  const source = Source.fromText(text);
  const scanner = new Parser(source.text);
  const tokens = scanner.parse().statements[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(')');
});

test('close bracket', () => {
  const text = ']';
  const source = Source.fromText(text);
  const scanner = new Parser(source.text);
  const tokens = scanner.parse().statements[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(']');
});

test('close brace', () => {
  const text = '}';
  const source = Source.fromText(text);
  const scanner = new Parser(source.text);
  const tokens = scanner.parse().statements[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe('}');
});
