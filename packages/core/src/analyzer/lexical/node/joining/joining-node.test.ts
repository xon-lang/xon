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
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(is(node.instance, $IdNode)).toBe(true);
  expect((node.instance as IdNode).text.toString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toString()).toBe('.');
  expect(node.id?.$).toBe($IdNode);
  expect((node.id as IdNode).text.toString()).toBe('def');
});

test('spaces', () => {
  const text = newText('abc~  .def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toString()).toBe('.');
  expect(is(node.id, $IdNode)).toBe(true);
  expect((node.id as IdNode).text.toString()).toBe('def');
});

test('with new line', () => {
  const text = newText('abc~   \n  .def');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toString()).toBe('.');
  expect(is(node.operator.hiddenNodes?.at(0), $LexicalNode)).toBe(true);
  expect((node.operator.hiddenNodes?.at(0) as LexicalNode)?.text.toString()).toBe(JOINING + '   \n');
  expect(is(node.id, $IdNode)).toBe(true);
  expect((node.id as IdNode).text.toString()).toBe('def');
});
