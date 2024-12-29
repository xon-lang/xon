import {newText, newTextResource, nothing} from '#common';
import {$CommaNode, CommaNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('comma', () => {
  const text = newText(',');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CommaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($CommaNode);
  expect(node.text.toString()).toBe(',');
});
