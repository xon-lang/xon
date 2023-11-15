import { issueMessage } from '~/issue/issue-message';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const parser = new Parser(source.text);
  const tokens = parser.parse() as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const parser = new Parser(source.text);
  const tokens = parser.parse() as TokenNode[];

  // todo check other 2 error nodes
  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].$).toBe(NodeType.ID);

  expect(parser.issues.length).toBe(2);
  expect(parser.issues[0].message.actual).toBe(issueMessage.unexpectedNode.actual);
  expect(parser.issues[1].message.actual).toBe(issueMessage.unexpectedNode.actual);

  // expect(tokens[1].text).toBe('edf_');
  // expect(tokens[1].$).toBe(NodeType.ID);

  // expect(tokens[2].text).toBe('_ghi1_23');
  // expect(tokens[2].$).toBe(NodeType.ID);
});
