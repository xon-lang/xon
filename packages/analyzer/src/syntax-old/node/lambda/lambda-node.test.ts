import {$LambdaNode, DeclarationNode, IdNode, LambdaNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {evaluate} from '#interpreter';
import {expect, test} from 'vitest';

test('function with no parameters', () => {
  const text = newText('(): Integer');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as LambdaNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($LambdaNode);
  expect(node.generics).toBeFalsy();
  expect(node.parameters?.items.count()).toBe(0);
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('Integer');
});

test('function with generic', () => {
  const text = newText('{T}(): T');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as LambdaNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($LambdaNode);
  expect(node.generics?.items.count()).toBe(1);
  expect((node.generics?.items.at(0)?.value as DeclarationNode).id.text.toNativeString()).toBe('T');
  expect(node.parameters.items.count()).toBe(0);
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('T');
});

test('function with generic and parameter', () => {
  const text = newText('{T}(a: T): T');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as LambdaNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($LambdaNode);
  expect(node.generics?.items.count()).toBe(1);
  expect((node.generics?.items.at(0)?.value as DeclarationNode).id.text.toNativeString()).toBe('T');
  expect(node.parameters.items.count()).toBe(1);
  expect((node.parameters?.items.at(0)?.value as DeclarationNode).id.text.toNativeString()).toBe('a');
  expect(
    ((node.parameters?.items.at(0)?.value as DeclarationNode).type?.value as IdNode).text.toNativeString(),
  ).toBe('T');
  expect((node.type?.value as IdNode).text.toNativeString()).toBe('T');
});

test('has argument and value', () => {
  const text = newText('(x) = x + 42');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as LambdaNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($LambdaNode);
  expect(node.parameters?.items.count()).toBe(1);
  expect((node.parameters?.items.at(0)?.value as DeclarationNode).id.text.toNativeString()).toBe('x');

  expect(
    evaluate(node.assign?.value, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('two parameter', () => {
  const text = newText('(a, b) = a+b');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as LambdaNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($LambdaNode);
  expect(node.parameters?.items.count()).toBe(2);
  expect((node.parameters?.items.at(0)?.value as DeclarationNode).id?.text.toNativeString()).toBe('a');
  expect((node.parameters?.items.at(1)?.value as DeclarationNode).id?.text.toNativeString()).toBe('b');
});
