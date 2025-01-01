import {newText, newTextResource, nothing} from '#common';
import {
  $IdNode,
  $LexicalNode,
  IdNode,
  JOINING,
  LexicalNode,
  MemberNode,
  OperatorNode,
  syntaxFromResource,
} from '#core';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('no space', () => {
  const text = newText('abc~.def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as MemberNode;

  expect(statements.length()).toBe(1);
  expect(node.instance.$.toNativeString()).toBe($IdNode.toNativeString());
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toNativeString()).toBe('.');
  expect(node.id?.$).toBe($IdNode);
  expect((node.id as IdNode).text.toNativeString()).toBe('def');
});

test('spaces', () => {
  const text = newText('abc~  .def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as MemberNode;

  expect(statements.length()).toBe(1);
  expect(node.instance?.$).toBe($IdNode);
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toNativeString()).toBe('.');
  expect(is(node.id, $IdNode)).toBe(true);
  expect((node.id as IdNode).text.toNativeString()).toBe('def');
});

test('with new line', () => {
  const text = newText('abc~   \n  .def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as MemberNode;

  expect(statements.length()).toBe(1);
  expect(node.instance?.$).toBe($IdNode);
  expect((node.instance as IdNode).text.toNativeString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toNativeString()).toBe('.');
  expect(is(node.operator.hiddenNodes?.at(0), $LexicalNode)).toBe(true);
  expect((node.operator.hiddenNodes?.at(0) as LexicalNode)?.text.toNativeString()).toBe(
    JOINING.toNativeString() + '   \n',
  );
  expect(is(node.id, $IdNode)).toBe(true);
  expect((node.id as IdNode).text.toNativeString()).toBe('def');
});
