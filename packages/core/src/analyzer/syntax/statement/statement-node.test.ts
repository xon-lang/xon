import {newText, newTextResource, nothing} from '#common';
import {$CharNode, $StatementNode, CharNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('a', () => {
  const text = newText("   \n    \n  ---comment ---'a'");
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const statement = statements.at2(0);

  expect(statements.length()).toBe(1);
  expect(statement.$).toBe($StatementNode);
  expect(statement.indentLevel).toBe(0);
  expect(statement.indent.stop.column).toBe(2);
  expect(statement.parent).toBe(nothing);
  expect(statement.children.length()).toBe(1);
  expect(statement.children.at(0)?.$).toBe($CharNode);
  expect((statement.children.at(0) as CharNode).content?.text.toNativeString()).toBe('a');
  expect(statement.body.length()).toBe(0);
});
