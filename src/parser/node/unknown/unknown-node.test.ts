import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { TokenNode } from '../token-node';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes as TokenNode[];

  expect(nodes.length).toBe(6);
  expect(nodes[1].text).toBe('§');
  expect(nodes[1].hidden.length).toBe(1);
  expect(nodes[1].hidden[0].text).toBe(' ');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes as TokenNode[];

  expect(nodes.length).toBe(3);
  expect(nodes.map((x) => x.text).join('')).toBe('ºª¶');
});
