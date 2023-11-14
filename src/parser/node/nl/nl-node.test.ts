import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { TokenNode } from '../token-node';

// test('line feed', () => {
//   const text = '\n';
//   const source = Source.fromText(text, null);
//   const lexer = new Parser(source.text);
//   const nodes = lexer.parse()[0].hidden ?? [];

//   expect(nodes.length).toBe(1);
//   expect(nodes[0].text).toBe('\n');
//   expect(nodes[0].$).toBe(NodeType.NL);
// });

// test('carriage return', () => {
//   const text = '\r';
//   const source = Source.fromText(text, null);
//   const lexer = new Parser(source.text);
//   const nodes = lexer.parse()[0].hidden ?? [];

//   expect(nodes.length).toBe(1);
//   expect(nodes[0].text).toBe('\r');
//   expect(nodes[0].$).toBe(NodeType.NL);
// });

// test('cr lf', () => {
//   const text = '\r\n';
//   const source = Source.fromText(text, null);
//   const lexer = new Parser(source.text);
//   const nodes = lexer.parse()[0].hidden ?? [];

//   expect(nodes.length).toBe(1);
//   expect(nodes[0].text).toBe('\r\n');
//   expect(nodes[0].$).toBe(NodeType.NL);
// });

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const statements = lexer.parse();

  expect(statements.length).toBe(0);
  // expect(statements[0].hidden?.first().$).toBe(NodeType.NL);
  // expect(statements[0].hidden?.first()?.text).toBe('\n');

  // expect(statements[1].hidden?.first().$).toBe(NodeType.NL);
  // expect(statements[1].hidden?.first()?.text).toBe('\r');

  // expect(statements[2].hidden.length).toBe(0);
});

test('several', () => {
  const code = '  \n    \r\nabc';
  const source = Source.fromText(code);
  const lexer = new Parser(source.text);
  const statements = lexer.parse();

  expect(statements.length).toBe(1);
  // expect(statements[0].hidden?.length).toBe(2);
  // expect(statements[0].hidden?.at(1)?.$).toBe(NodeType.NL);
  // expect(statements[0].hidden?.at(1)?.text).toBe('\n');
  // expect(statements[1].hidden?.length).toBe(2);
  // expect(statements[1].hidden?.at(1)?.$).toBe(NodeType.NL);
  // expect(statements[1].hidden?.at(1)?.text).toBe('\r\n');
  // expect(statements[2].hidden?.length).toBe(0);
  expect((statements[0] as TokenNode).text).toBe('abc');
});
