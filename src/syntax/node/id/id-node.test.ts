import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { parseSyntax } from '../../syntax';
import { $Node, TokenNode } from '../node';

test('single id', () => {
  const text = 'abc';
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('abc');
  expect(nodes[0].$).toBe($Node.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const context = parseSyntax(text);
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  // todo check other 2 error nodes
  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('abc');
  expect(nodes[0].$).toBe($Node.ID);

  expect(context.issues.length).toBe(2);
  expect(context.issues[0].message.actual).toBe(ISSUE_MESSAGE.notImplemented().actual);
  expect(context.issues[1].message.actual).toBe(ISSUE_MESSAGE.notImplemented().actual);

  // expect(nodes[1].text).toBe('edf_');
  // expect(nodes[1].$).toBe(NodeType.ID);

  // expect(nodes[2].text).toBe('_ghi1_23');
  // expect(nodes[2].$).toBe(NodeType.ID);
});
