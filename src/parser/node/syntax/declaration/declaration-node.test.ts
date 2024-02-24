import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { CharNode } from '../../token/char/char-node';
import { IdNode } from '../../token/id/id-node';
import { IntegerNode } from '../../token/integer/integer-node';
import { DeclarationNode } from './declaration-node';

test('model a', () => {
  const text = 'model A';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.$).toBe($Node.DECLARATION);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
});

test('model a extends b', () => {
  const text = 'model A: B';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type?.value?.$).toBe($Node.ID);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('model a with generics extends b', () => {
  const text = 'model A{T: Array = String, U}: B';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.generics?.items.length).toBe(2);
  expect(node.generics?.items[0]?.id?.text).toBe('T');
  expect((node.generics?.items[0]?.type?.value as IdNode)?.text).toBe('Array');
  expect((node.generics?.items[0]?.assign?.value as IdNode)?.text).toBe('String');
  expect(node.type?.value?.$).toBe($Node.ID);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('model a with parameters extends b', () => {
  const text = "model A(a: Integer = 123, b: Boolean, c = 'C'): B";
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');

  expect(node.parameters?.items.length).toBe(3);
  expect(node.parameters?.items[0]?.id?.text).toBe('a');
  expect((node.parameters?.items[0]?.type?.value as IdNode)?.text).toBe('Integer');
  expect((node.parameters?.items[0]?.assign?.value as IntegerNode)?.text).toBe('123');

  expect(node.parameters?.items[1]?.id?.text).toBe('b');
  expect((node.parameters?.items[1]?.type?.value as IdNode)?.text).toBe('Boolean');
  expect(node.parameters?.items[1]?.assign?.value).toBeFalsy();

  expect(node.parameters?.items[2]?.id?.text).toBe('c');
  expect(node.parameters?.items[2]?.type?.value).toBeFalsy();
  expect((node.parameters?.items[2]?.assign?.value as CharNode)?.text).toBe("'C'");

  expect(node.type?.value?.$).toBe($Node.ID);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('model a with generics and parameters extends b', () => {
  const text = "model A{T: Array = String, U}(a: Integer = 123, b: Boolean, c = 'C'): B";
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');

  expect(node.generics?.items.length).toBe(2);
  expect(node.generics?.items[0]?.id?.text).toBe('T');
  expect((node.generics?.items[0]?.type?.value as IdNode)?.text).toBe('Array');
  expect((node.generics?.items[0]?.assign?.value as IdNode)?.text).toBe('String');

  expect(node.parameters?.items.length).toBe(3);
  expect(node.parameters?.items[0]?.id?.text).toBe('a');
  expect((node.parameters?.items[0]?.type?.value as IdNode)?.text).toBe('Integer');
  expect((node.parameters?.items[0]?.assign?.value as IntegerNode)?.text).toBe('123');

  expect(node.parameters?.items[1]?.id?.text).toBe('b');
  expect((node.parameters?.items[1]?.type?.value as IdNode)?.text).toBe('Boolean');
  expect(node.parameters?.items[1]?.assign?.value).toBeFalsy();

  expect(node.parameters?.items[2]?.id?.text).toBe('c');
  expect(node.parameters?.items[2]?.type?.value).toBeFalsy();
  expect((node.parameters?.items[2]?.assign?.value as CharNode)?.text).toBe("'C'");

  expect(node.type?.value?.$).toBe($Node.ID);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('model a has attributes', () => {
  const text = `model A
  a
  b: Boolean
  c: Char = 'C'
  d = 1
  e(a, b, c: Char, d = 2): Nothing
  f{T, U, V}(a, b, c: Char, d = 2) = a + b + d
  `;
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as DeclarationNode;

  expect(ast.statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type?.value).toBeFalsy();
  expect(node.attributes.length).toBe(6);
});
