import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('comma', () => {
  const text = ',';
  const parser = new Parser(text);
  const tokens = parser.parse() as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.COMMA);
  expect(tokens[0].text).toBe(',');
});
