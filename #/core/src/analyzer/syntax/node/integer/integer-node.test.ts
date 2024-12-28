import {newText, newTextResource, nothing} from '#common';
import {IntegerNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('integer', () => {
  const text = newText('123');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.IntegerNode);
  expect(node.content.text.toString()).toBe('123');
});

test('zero int number', () => {
  const text = newText('0');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.IntegerNode);
  expect(node.content.text.toString()).toBe('0');
});
