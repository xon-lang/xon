import {newText, newTextResource, nothing} from '#common';
import {$IntegerNode, IntegerNode, syntaxFromResource} from '#core';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('string content', () => {
  const text = newText('1_2_3');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IntegerNode;

  expect(statements.length).toBe(1);
  expect(is(node, $IntegerNode)).toBe(true);
  expect(node.content?.text.toNativeString()).toBe('1_2_3');
  expect(node.value).toBe(123);
});
