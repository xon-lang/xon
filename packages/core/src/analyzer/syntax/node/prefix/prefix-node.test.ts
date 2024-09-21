import {nothing, textResourceFromData} from '#common';
import {DeclarationNode, evaluate, LexicalNode, OperatorNode, PrefixNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('negative integer', () => {
  const text = '-1';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.PrefixNode);
  expect(node.operator.text.toString()).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = 'infix';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.OperatorNode);
  expect(node.text.toString()).toBe('infix');
});

test('hidden nodes', () => {
  const text = '-    1\n';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.PrefixNode);
  expect(node.operator.text.toString()).toBe('-');

  expect(node.value.hiddenNodes?.length).toBe(1);
  expect(node.value.hiddenNodes?.at(0)?.$).toBe($.WhitespaceNode);
  expect((node.value.hiddenNodes?.at(0) as LexicalNode)?.text.toString()).toBe('    ');

  expect(evaluate(node)).toBe(-1);
});

test('infix declaration', () => {
  const text = 'infix +';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.DeclarationNode);
  expect(node.modifier?.text.toString()).toBe('infix');
  expect(node.id.text.toString()).toBe('+');
});
