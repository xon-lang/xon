import {$CommaNode, CommaNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('comma', () => {
  const text = newText(',');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as CommaNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($CommaNode);
  expect(node.text.toNativeString()).toBe(',');
});
