import {newText, newTextResource, nothing} from '#common';
import {$AssignmentNode, AssignmentNode, IntegerNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('a = 1', () => {
  const text = newText('a= 1');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as AssignmentNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($AssignmentNode);
  expect(node.id.text.toString()).toBe('a');
  expect(node.assign.operator.text.toString()).toBe('=');
  expect((node.assign.value as IntegerNode).value).toBe(1);
});
