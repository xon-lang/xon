import {$IntegerNode, IntegerNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('string content', () => {
  const text = newText('1_2_3');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as IntegerNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $IntegerNode)).toBe(true);
  expect(node.content?.text.toNativeString()).toBe('1_2_3');
  expect(node.value).toBe(123);
});
