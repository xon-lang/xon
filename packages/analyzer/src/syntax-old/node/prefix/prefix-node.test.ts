import {
  $DeclarationNode,
  $OperatorNode,
  $PrefixNode,
  $WhitespaceNode,
  DeclarationNode,
  LexicalNode,
  OperatorNode,
  PrefixNode,
  syntaxFromResource,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {evaluate} from '#interpreter';
import {expect, test} from 'vitest';

test('negative integer', () => {
  const text = newText('-1');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as PrefixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($PrefixNode);
  expect(node.operator.text.toNativeString()).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = newText('infix');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as OperatorNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($OperatorNode);
  expect(node.text.toNativeString()).toBe('infix');
});

test('hidden nodes', () => {
  const text = newText('-    1\n');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as PrefixNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($PrefixNode);
  expect(node.operator.text.toNativeString()).toBe('-');

  expect(node.value.hiddenNodes?.count()).toBe(1);
  expect(node.value.hiddenNodes?.at(0)?.$).toBe($WhitespaceNode);
  expect((node.value.hiddenNodes?.at(0) as LexicalNode)?.text.toNativeString()).toBe('    ');

  expect(evaluate(node)).toBe(-1);
});

test('infix declaration', () => {
  const text = newText('infix +');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as DeclarationNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($DeclarationNode);
  expect(node.modifier?.text.toNativeString()).toBe('infix');
  expect(node.id.text.toNativeString()).toBe('+');
});
