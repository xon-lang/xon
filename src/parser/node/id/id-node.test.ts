import { issueMessage } from '~/issue/issue-message';
import { parse } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('single id', () => {
  const text = 'abc';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('abc');
  expect(nodes[0].$).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const context = parse(text);
  const nodes = parse(text).root.children as TokenNode[];

  // todo check other 2 error nodes
  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('abc');
  expect(nodes[0].$).toBe(NodeType.ID);

  expect(context.issues.length).toBe(2);
  expect(context.issues[0].message.actual).toBe(issueMessage.unexpectedNode.actual);
  expect(context.issues[1].message.actual).toBe(issueMessage.unexpectedNode.actual);

  // expect(nodes[1].text).toBe('edf_');
  // expect(nodes[1].$).toBe(NodeType.ID);

  // expect(nodes[2].text).toBe('_ghi1_23');
  // expect(nodes[2].$).toBe(NodeType.ID);
});
