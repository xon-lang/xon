import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { GroupNode } from '../../../parser/node/group/group-node';
import { parse } from '../../../parser/parser';
import { is } from '../../../parser/util/is';
import { OPEN_CLOSE_PAIR } from '../../parser-config';
import { $Node } from '../node';

test('empty closed', () => {
  const text = '()';
  const nodes = parse(text).root.children;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, $Node.GROUP)).toBe(true);
  expect(is(group.open, $Node.OPEN)).toBe(true);
  expect(is(group.close, $Node.CLOSE)).toBe(true);
  expect(group.items.length).toBe(0);
});

test('validate close pair', () => {
  const text = '(';
  const ast = parse(text);
  const nodes = ast.root.children;

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
