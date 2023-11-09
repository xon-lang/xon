import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

test('if keyword', () => {
  const text = 'if';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const tokens = lexer.parse().statements[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.KEYWORD);
  expect(tokens[0].text).toBe('if');
});
