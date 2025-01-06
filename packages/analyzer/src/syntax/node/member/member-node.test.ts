import {$IdNode, $MemberNode, LexicalNode, MemberNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('member with id instance', () => {
  const text = newText('abc.def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as MemberNode;

  expect(statements.count()).toBe(1);
  expect(node.$.toNativeString()).toBe($MemberNode.toNativeString());

  expect(node.instance.$).toBe($IdNode);
  expect((node.instance as LexicalNode).text.toNativeString()).toBe('abc');

  expect(node.operator.text.toNativeString()).toBe('.');

  expect(node.id?.$).toBe($IdNode);
  expect(node.id?.text.toNativeString()).toBe('def');
});

test('member without id', () => {
  const text = newText('abc.');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as MemberNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($MemberNode);

  expect(node.instance.$).toBe($IdNode);
  expect((node.instance as LexicalNode).text.toNativeString()).toBe('abc');

  expect(node.operator.text.toNativeString()).toBe('.');

  expect(node.id).toBe(nothing);
});
