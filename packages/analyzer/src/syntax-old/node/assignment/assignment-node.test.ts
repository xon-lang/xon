import {$AssignmentNode, AssignmentNode, IntegerNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('a = 1', () => {
  const text = newText('a= 1');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as AssignmentNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($AssignmentNode);
  expect(node.id.text.toNativeString()).toBe('a');
  expect(node.assign.operator.text.toNativeString()).toBe('=');
  expect((node.assign.value as IntegerNode).value).toBe(1);
});
