import {newText, newTextResource, nothing} from '#common';
import {
  $InfixNode,
  $OperatorNode,
  $PostfixNode,
  InfixNode,
  OperatorNode,
  PostfixNode,
  syntaxFromResource,
} from '#core';
import {expect, test} from 'vitest';

test('single operator', () => {
  const text = newText('!');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as OperatorNode;

  expect(statements.length()).toBe(1);
  expect(node.text.toNativeString()).toBe('!');
  expect(node.$).toBe($OperatorNode);
});

test('after integer', () => {
  const text = newText('1!');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as PostfixNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($PostfixNode);
  expect(node.operator.text.toNativeString()).toBe('!');
});

test('x + x', () => {
  const text = newText('x is Number');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as InfixNode;

  expect(statements.length()).toBe(1);
  expect(node.$).toBe($InfixNode);
  expect(node.operator.text.toNativeString()).toBe('is');
});
