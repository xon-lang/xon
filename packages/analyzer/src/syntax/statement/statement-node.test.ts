import {$CharacterNode, $StatementNode, CharacterNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('a', () => {
  const text = newText("   \n    \n  ---comment ---'a'");
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const statement = statements.at2(0);

  expect(statements.count()).toBe(1);
  expect(statement.$).toBe($StatementNode);
  expect(statement.indentLevel).toBe(0);
  expect(statement.indent.stop.column).toBe(2);
  expect(statement.parent).toBe(nothing);
  expect(statement.children.count()).toBe(1);
  expect(statement.children.at(0)?.$).toBe($CharacterNode);
  expect((statement.children.at(0) as CharacterNode).content?.text.toNativeString()).toBe('a');
  expect(statement.body.count()).toBe(0);
});
