import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from './id-node';

test('single id', () => {
  const text = 'abc';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as IdNode;

  expect(statements.length).toBe(1);
  expect(node.text).toBe('abc');
  expect(node.$).toBe($Node.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as IdNode;

  expect(statements.length).toBe(1);
  expect(node.text).toBe('abc');
  expect(node.$).toBe($Node.ID);

  expect(syntax.issueManager.issues.length).toBe(2);
  expect(syntax.issueManager.issues[0].message.actual).toBe(ISSUE_MESSAGE.notImplemented().actual);
  expect(syntax.issueManager.issues[1].message.actual).toBe(ISSUE_MESSAGE.notImplemented().actual);
});
