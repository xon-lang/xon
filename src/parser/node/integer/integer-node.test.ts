import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('integer', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.INTEGER);
  expect(nodes[0].text).toBe('123');
});

test('zero int number', () => {
  const text = '0';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.INTEGER);
  expect(nodes[0].text).toBe('0');
});

test('positive int number', () => {
  const text = '2x01110';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.INTEGER);
  expect(nodes[0].text).toBe('2x01110');
});

test('radix int', () => {
  const text = '16x1a_b_c';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.INTEGER);
  expect(nodes[0].text).toBe('16x1a_b_c');
});
