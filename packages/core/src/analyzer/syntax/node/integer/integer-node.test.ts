import {nothing} from '#common';
import {$, IntegerNode, syntaxFromResource, textResourceFromData} from '#core';

test('integer', () => {
  const text = '123';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.IntegerNode);
  expect(node.content.text.toString()).toBe('123');
});

test('zero int number', () => {
  const text = '0';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.IntegerNode);
  expect(node.content.text.toString()).toBe('0');
});
