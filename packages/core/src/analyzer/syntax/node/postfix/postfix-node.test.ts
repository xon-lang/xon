import {newText, newTextResource, nothing} from '#common';
import {$PostfixNode, PostfixNode, evaluate, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('after integer', () => {
  const text = newText('1!');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PostfixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($PostfixNode);
  expect(node.operator.text.toString()).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
