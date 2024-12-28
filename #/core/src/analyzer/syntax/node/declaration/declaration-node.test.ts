import {newText, newTextResource, nothing} from '#common';
import {CharNode, DeclarationNode, IdNode, IntegerNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('type A', () => {
  const text = newText('type A');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');
});

test('type A: B', () => {
  const text = newText('type A: B');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');
  expect(node.type?.$).toBe($.TypeNode);
  expect((node.type?.value as IdNode).text.toString()).toBe('B');
});

test('with generics extends b', () => {
  const text = newText('type A<:T: Array = String, U:>: B');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');
  expect(node.generics?.items.length).toBe(2);
  const generic = node.generics?.items.at(0)?.value as DeclarationNode;
  expect(generic?.$).toBe($.DeclarationNode);
  expect(generic?.id?.text.toString()).toBe('T');
  expect((generic?.type?.value as IdNode)?.text.toString()).toBe('Array');
  expect((generic?.assign?.value as IdNode)?.text.toString()).toBe('String');
  expect(node.type?.$).toBe($.TypeNode);
  expect((node.type?.value as IdNode).text.toString()).toBe('B');
});

test('with parameters extends b', () => {
  const text = newText("type A(a: Integer = 123, b: Boolean, c = 'C'): B");
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');

  expect(node.parameters?.items.length).toBe(3);

  const parameter0 = node.parameters?.items.at(0)?.value as DeclarationNode;
  expect(parameter0?.id?.text.toString()).toBe('a');
  expect((parameter0?.type?.value as IdNode)?.text.toString()).toBe('Integer');
  expect((parameter0?.assign?.value as IntegerNode)?.content?.text.toString()).toBe('123');

  const parameter1 = node.parameters?.items.at(1)?.value as DeclarationNode;
  expect(parameter1?.id?.text.toString()).toBe('b');
  expect((parameter1?.type?.value as IdNode)?.text.toString()).toBe('Boolean');
  expect(parameter1?.assign).toBeFalsy();

  const parameter2 = node.parameters?.items.at(2)?.value as DeclarationNode;
  expect(parameter2?.id?.text.toString()).toBe('c');
  expect(parameter2?.type).toBeFalsy();
  expect((parameter2?.assign?.value as CharNode)?.content?.text.toString()).toBe('C');

  expect(node.type?.value?.$).toBe($.IdNode);
  expect((node.type?.value as IdNode).text.toString()).toBe('B');
});

test('with generics and parameters extends b', () => {
  const text = newText("type A<:T: Array = String, U:>(a: Integer = 123, b: Boolean, c = 'C'): B");
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');

  expect(node.generics?.items.length).toBe(2);

  const generic0 = node.generics?.items.at(0)?.value as DeclarationNode;
  expect(generic0?.id?.text.toString()).toBe('T');
  expect((generic0?.type?.value as IdNode)?.text.toString()).toBe('Array');
  expect((generic0?.assign?.value as IdNode)?.text.toString()).toBe('String');

  expect(node.parameters?.items.length).toBe(3);

  const parameter0 = node.parameters?.items.at(0)?.value as DeclarationNode;
  expect(parameter0?.id?.text.toString()).toBe('a');
  expect((parameter0?.type?.value as IdNode)?.text.toString()).toBe('Integer');
  expect((parameter0?.assign?.value as IntegerNode)?.content.text.toString()).toBe('123');

  const parameter1 = node.parameters?.items.at(1)?.value as DeclarationNode;
  expect(parameter1?.id?.text.toString()).toBe('b');
  expect((parameter1?.type?.value as IdNode)?.text.toString()).toBe('Boolean');
  expect(parameter1?.assign).toBeFalsy();

  const parameter2 = node.parameters?.items.at(2)?.value as DeclarationNode;
  expect(parameter2?.id?.text.toString()).toBe('c');
  expect(parameter2?.type).toBeFalsy();
  expect((parameter2?.assign?.value as CharNode)?.content?.text.toString()).toBe('C');

  expect(node.type?.value.$).toBe($.IdNode);
  expect((node.type?.value as IdNode).text.toString()).toBe('B');
});

test('has attributes', () => {
  const text = newText(`type A
  a
  b: Boolean
  c: Char = 'C'
  d = 1
  e(a, b, c: Char, d = 2): Nothing
  f{T, U, V}(a, b, c: Char, d = 2) = a + b + d
  `);
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');
  expect(node.type).toBeFalsy();
  expect(statements[0].body.length).toBe(6);
});

test('type string with base class', () => {
  const text = newText('type Array\ntype String: Array');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[1].value as DeclarationNode;

  expect(statements.length).toBe(2);
  expect(node.$).toBe($.DeclarationNode);

  expect(node.modifier?.$).toBe($.OperatorNode);
  expect(node.modifier?.text.toString()).toBe('type');
});

test('lambda type', () => {
  const text = newText('const a: (x: Integer): Integer');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);

  expect(node.modifier?.$).toBe($.OperatorNode);
  expect(node.modifier?.text.toString()).toBe('const');
  expect(node.type?.value.$).toBe($.LambdaNode);
});

test('declaration documentation', () => {
  const text = newText(`
===
  Some description
===
type A`);
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.documentation?.description?.text.toString()).toBe('\n  Some description\n');
  expect(node.modifier?.text.toString()).toBe('type');
  expect(node.id?.text.toString()).toBe('A');
  expect(node.id.reference.range.start.line).toBe(4);
});

test('infix plus operator', () => {
  const text = newText('infix + (a: Integer, b: Integer): Integer');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  // expect(node.documentation?.description?.text.toString()).toBe('\n  Some description\n');
  // expect(node.modifier?.text.toString()).toBe('type');
  // expect(node.id?.text.toString()).toBe('A');
  // expect(node.id.range.start.line).toBe(4);
});
