import {newTextData, nothing, textResourceFromData} from '#/common';
import {IdNode, JOINING, LexicalNode, MemberNode, OperatorNode, syntaxFromResource} from '#/core';
import {$, is} from '#/typing';

test('no space', () => {
  const text = newTextData('abc~.def');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($.IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toString()).toBe('.');
  expect(node.id?.$).toBe($.IdNode);
  expect((node.id as IdNode).text.toString()).toBe('def');
});

test('spaces', () => {
  const text = newTextData('abc~  .def');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($.IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toString()).toBe('.');
  expect(node.id?.$).toBe($.IdNode);
  expect((node.id as IdNode).text.toString()).toBe('def');
});

test('with new line', () => {
  const text = newTextData('abc~   \n  .def');
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as MemberNode;

  expect(statements.length).toBe(1);
  expect(node.instance?.$).toBe($.IdNode);
  expect((node.instance as IdNode).text.toString()).toBe('abc');
  expect((node.operator as OperatorNode).text.toString()).toBe('.');
  expect(is(node.operator.hiddenNodes?.at(0), $.LexicalNode)).toBe(true);
  expect((node.operator.hiddenNodes?.at(0) as LexicalNode)?.text.toString()).toBe(JOINING + '   \n');
  expect(node.id?.$).toBe($.IdNode);
  expect((node.id as IdNode).text.toString()).toBe('def');
});
