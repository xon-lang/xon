import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {CharNode} from '../../../lexical/node/char/char-node';
import {IdNode} from '../../../lexical/node/id/id-node';
import {IntegerNode} from '../../../lexical/node/integer/integer-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {DeclarationNode} from './declaration-node';

test('model A', () => {
  const text = 'model A';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
});

test('model A: B', () => {
  const text = 'model A: B';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type?.$).toBe($.TypeNode);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('with generics extends b', () => {
  const text = 'model A{T: Array = String, U}: B';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.generics?.items.length).toBe(2);
  const generic = node.generics?.items.at(0)?.value as DeclarationNode;
  expect(generic?.$).toBe($.DeclarationNode);
  expect(generic?.id?.text).toBe('T');
  expect((generic?.type?.value as IdNode)?.text).toBe('Array');
  expect((generic?.assign?.value as IdNode)?.text).toBe('String');
  expect(node.type?.$).toBe($.TypeNode);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('with parameters extends b', () => {
  const text = "model A(a: Integer = 123, b: Boolean, c = 'C'): B";
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');

  expect(node.parameters?.items.length).toBe(3);

  const parameter0 = node.parameters?.items.at(0)?.value as DeclarationNode;
  expect(parameter0?.id?.text).toBe('a');
  expect((parameter0?.type?.value as IdNode)?.text).toBe('Integer');
  expect((parameter0?.assign?.value as IntegerNode)?.text).toBe('123');

  const parameter1 = node.parameters?.items.at(1)?.value as DeclarationNode;
  expect(parameter1?.id?.text).toBe('b');
  expect((parameter1?.type?.value as IdNode)?.text).toBe('Boolean');
  expect(parameter1?.assign).toBeFalsy();

  const parameter2 = node.parameters?.items.at(2)?.value as DeclarationNode;
  expect(parameter2?.id?.text).toBe('c');
  expect(parameter2?.type).toBeFalsy();
  expect((parameter2?.assign?.value as CharNode)?.text).toBe("'C'");

  expect(node.type?.value?.$).toBe($.IdNode);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('with generics and parameters extends b', () => {
  const text = "model A{T: Array = String, U}(a: Integer = 123, b: Boolean, c = 'C'): B";
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');

  expect(node.generics?.items.length).toBe(2);

  const generic0 = node.generics?.items.at(0)?.value as DeclarationNode;
  expect(generic0?.id?.text).toBe('T');
  expect((generic0?.type?.value as IdNode)?.text).toBe('Array');
  expect((generic0?.assign?.value as IdNode)?.text).toBe('String');

  expect(node.parameters?.items.length).toBe(3);

  const parameter0 = node.parameters?.items.at(0)?.value as DeclarationNode;
  expect(parameter0?.id?.text).toBe('a');
  expect((parameter0?.type?.value as IdNode)?.text).toBe('Integer');
  expect((parameter0?.assign?.value as IntegerNode)?.text).toBe('123');

  const parameter1 = node.parameters?.items.at(1)?.value as DeclarationNode;
  expect(parameter1?.id?.text).toBe('b');
  expect((parameter1?.type?.value as IdNode)?.text).toBe('Boolean');
  expect(parameter1?.assign).toBeFalsy();

  const parameter2 = node.parameters?.items.at(2)?.value as DeclarationNode;
  expect(parameter2?.id?.text).toBe('c');
  expect(parameter2?.type).toBeFalsy();
  expect((parameter2?.assign?.value as CharNode)?.text).toBe("'C'");

  expect(node.type?.value.$).toBe($.IdNode);
  expect((node.type?.value as IdNode).text).toBe('B');
});

test('has attributes', () => {
  const text = `model A
  a
  b: Boolean
  c: Char = 'C'
  d = 1
  e(a, b, c: Char, d = 2): Nothing
  f{T, U, V}(a, b, c: Char, d = 2) = a + b + d
  `;
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.type).toBeFalsy();
  expect(statements[0].body.length).toBe(6);
});

test('model string with base class', () => {
  const text = 'model Array\nmodel String: Array';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[1].value as DeclarationNode;

  expect(statements.length).toBe(2);
  expect(node.$).toBe($.DeclarationNode);

  expect(node.modifier?.$).toBe($.OperatorNode);
  expect(node.modifier?.text).toBe('model');
});

test('lambda type', () => {
  const text = 'const a: (x: Integer): Integer';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);

  expect(node.modifier?.$).toBe($.OperatorNode);
  expect(node.modifier?.text).toBe('const');
  expect(node.type?.value.$).toBe($.LambdaNode);
});

test('declaration documentation', () => {
  const text = `
===
  Some description
===
model A`;
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.documentation?.description?.text).toBe('\n  Some description\n');
  expect(node.modifier?.text).toBe('model');
  expect(node.id?.text).toBe('A');
  expect(node.id.range.start.line).toBe(4);
});
