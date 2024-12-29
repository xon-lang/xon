import {newText, newTextResource, nothing} from '#common';
import {$IdNode, $MemberNode, LexicalNode, MemberNode, syntaxFromResource} from '#core';

test('member with id instance', () => {
  const text = newText('abc.def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($MemberNode);

  expect(node.instance.$).toBe($IdNode);
  expect((node.instance as LexicalNode).text.toString()).toBe('abc');

  expect(node.operator.text.toString()).toBe('.');

  expect(node.id?.$).toBe($IdNode);
  expect(node.id?.text.toString()).toBe('def');
});

test('member without id', () => {
  const text = newText('abc.');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($MemberNode);

  expect(node.instance.$).toBe($IdNode);
  expect((node.instance as LexicalNode).text.toString()).toBe('abc');

  expect(node.operator.text.toString()).toBe('.');

  expect(node.id).toBe(nothing);
});
