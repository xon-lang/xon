import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { parseSyntax } from '../../syntax';
import { OPEN_CLOSE_PAIR } from '../../syntax-config';
import { is } from '../../util/is';
import { $Node } from '../node';
import { GroupNode } from './group-node';

test('empty closed', () => {
  const text = '()';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, $Node.GROUP)).toBe(true);
  expect(is(group.open, $Node.OPEN)).toBe(true);
  expect(is(group.close, $Node.CLOSE)).toBe(true);
  expect(group.items.length).toBe(0);
});

test('validate close pair', () => {
  const text = '(';
  const ast = parseSyntax(text);
  const nodes = ast.statements.map((x) => x.item);

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, $Node.GROUP)).toBe(true);
  expect(is(group.open, $Node.OPEN)).toBe(true);
  expect(group.close).toBe(null);
  expect(group.items.length).toBe(0);
  expect(ast.issues.length).toBe(1);

  const issueMessage = ISSUE_MESSAGE.expectCloseToken(
    group.open.text,
    String.fromCharCode(OPEN_CLOSE_PAIR[group.open.text.charCodeAt(0)]),
  );

  expect(ast.issues[0].message.actual).toBe(issueMessage.actual);
  expect(ast.issues[0].message.expect).toBe(issueMessage.expect);
});
