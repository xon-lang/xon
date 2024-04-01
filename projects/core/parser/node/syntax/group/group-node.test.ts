import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {OPEN_CLOSE_PAIR} from '../../../parser-config';
import {resourceParse} from '../../../resource-parser';
import {$Node, is} from '../../node';
import {GroupNode} from './group-node';

test('empty closed', () => {
  const text = '()';
  const source = textResourceFrom(nothing, text);
  const syntax = resourceParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.GROUP)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(is(node.close, $Node.CLOSE)).toBe(true);
  expect(node.items.length).toBe(0);
});

test('validate close pair', () => {
  const text = '(';
  const source = textResourceFrom(nothing, text);
  const syntax = resourceParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.GROUP)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.length).toBe(0);
  expect(syntax.issueManager.issues.length).toBe(1);

  const issueMessage = ISSUE_MESSAGE.expectCloseToken(node.open.text, OPEN_CLOSE_PAIR[node.open.text]);

  expect(syntax.issueManager.issues[0].message.actual).toBe(issueMessage.actual);
  expect(syntax.issueManager.issues[0].message.expect).toBe(issueMessage.expect);
});

test('a in group', () => {
  const text = '(a)';
  const source = textResourceFrom(nothing, text);
  const syntax = resourceParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.GROUP);
});
