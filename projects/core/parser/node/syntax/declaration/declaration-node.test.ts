import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {CharNode} from '../../token/literal/char/char-node';
import {IntegerNode} from '../../token/literal/integer/integer-node';
import {DeclarationNode} from './declaration-node';

test('model a', () => {
  const text = 'model A';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].declaration as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node).toBeTruthy();
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
});

test('model a extends b', () => {
  const text = 'model A: B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].declaration as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type?.$).toBe($Node.ID);
  expect((node.type as IdNode).text).toBe('B');
});

test('model a with generics extends b', () => {
  const text = 'model A{T: Array = String, U}: B';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].declaration as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.generics?.length).toBe(2);
  expect(node.generics?.at(0)?.id?.text).toBe('T');
  expect((node.generics?.at(0)?.type as IdNode)?.text).toBe('Array');
  expect((node.generics?.at(0)?.value as IdNode)?.text).toBe('String');
  expect(node.type?.$).toBe($Node.ID);
  expect((node.type as IdNode).text).toBe('B');
});

test('model a with parameters extends b', () => {
  const text = "model A(a: Integer = 123, b: Boolean, c = 'C'): B";
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].declaration as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');

  expect(node.parameters?.length).toBe(3);
  expect(node.parameters?.at(0)?.id?.text).toBe('a');
  expect((node.parameters?.at(0)?.type as IdNode)?.text).toBe('Integer');
  expect((node.parameters?.at(0)?.value as IntegerNode)?.text).toBe('123');

  expect(node.parameters?.at(1)?.id?.text).toBe('b');
  expect((node.parameters?.at(1)?.type as IdNode)?.text).toBe('Boolean');
  expect(node.parameters?.at(1)?.value).toBeFalsy();

  expect(node.parameters?.at(2)?.id?.text).toBe('c');
  expect(node.parameters?.at(2)?.type).toBeFalsy();
  expect((node.parameters?.at(2)?.value as CharNode)?.text).toBe("'C'");

  expect(node.type?.$).toBe($Node.ID);
  expect((node.type as IdNode).text).toBe('B');
});

test('model a with generics and parameters extends b', () => {
  const text = "model A{T: Array = String, U}(a: Integer = 123, b: Boolean, c = 'C'): B";
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].declaration as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');

  expect(node.generics?.length).toBe(2);
  expect(node.generics?.at(0)?.id?.text).toBe('T');
  expect((node.generics?.at(0)?.type as IdNode)?.text).toBe('Array');
  expect((node.generics?.at(0)?.value as IdNode)?.text).toBe('String');

  expect(node.parameters?.length).toBe(3);
  expect(node.parameters?.at(0)?.id?.text).toBe('a');
  expect((node.parameters?.at(0)?.type as IdNode)?.text).toBe('Integer');
  expect((node.parameters?.at(0)?.value as IntegerNode)?.text).toBe('123');

  expect(node.parameters?.at(1)?.id?.text).toBe('b');
  expect((node.parameters?.at(1)?.type as IdNode)?.text).toBe('Boolean');
  expect(node.parameters?.at(1)?.value).toBeFalsy();

  expect(node.parameters?.at(2)?.id?.text).toBe('c');
  expect(node.parameters?.at(2)?.type).toBeFalsy();
  expect((node.parameters?.at(2)?.value as CharNode)?.text).toBe("'C'");

  expect(node.type?.$).toBe($Node.ID);
  expect((node.type as IdNode).text).toBe('B');
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
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].declaration as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type).toBeFalsy();
  expect(node.attributes.length).toBe(6);
});
