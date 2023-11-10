import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const statements = lexer.parse().statements;
  const nodes = statements[0].nodes as TokenNode[];

  expect(statements.length).toBe(1);
  expect(statements[0].hidden.length).toBe(1);
  expect(statements[0].hidden[0].text).toBe('    ');
  expect(statements[0].hidden[0].$).toBe(NodeType.WHITESPACE);
  expect(nodes.length).toBe(0);
});
