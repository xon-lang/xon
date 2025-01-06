import {$CharNode, CharNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('a', () => {
  const text = newText("'a'");
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as CharNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($CharNode);
  expect(node.content?.text.toNativeString()).toBe(text.slice(1, -1).toNativeString());
});
