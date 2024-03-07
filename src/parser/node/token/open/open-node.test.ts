import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {GroupNode} from '../../syntax/group/group-node';

test('open paren', () => {
  const text = '(';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.GROUP);
  expect(node.open.$).toBe($Node.OPEN);
  expect(node.open.text).toBe('(');
  expect(node.close).toBe(null);
});

test('open bracket', () => {
  const text = '[';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ARRAY);
  expect(node.open.$).toBe($Node.OPEN);
  expect(node.open.text).toBe('[');
  expect(node.close).toBe(null);
});

test('open brace', () => {
  const text = '{';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect((node as GroupNode).open.$).toBe($Node.OPEN);
  expect((node as GroupNode).open.text).toBe('{');
  expect((node as GroupNode).close).toBe(null);
});
