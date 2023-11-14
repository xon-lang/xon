import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const tokens = lexer.parse() as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const tokens = lexer.parse() as TokenNode[];

  // todo check other 2 error nodes
  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);

  // expect(tokens[1].text).toBe('edf_');
  // expect(tokens[1].$).toBe(NodeType.ID);

  // expect(tokens[2].text).toBe('_ghi1_23');
  // expect(tokens[2].$).toBe(NodeType.ID);
});
