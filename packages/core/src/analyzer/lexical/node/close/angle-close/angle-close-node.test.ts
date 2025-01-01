import {newText, newTextResource, nothing} from '#common';
import {$AngleCloseNode, AngleCloseNode, syntaxFromResource} from '#core';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close angle', () => {
  const text = newText(':>');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as AngleCloseNode;

  expect(statements.length()).toBe(1);
  expect(is(node, $AngleCloseNode)).toBe(true);
  expect(node.text.toNativeString()).toBe(':>');
});
