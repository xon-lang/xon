import {
  $GroupNode,
  $StatementNode2,
  GroupNode,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Statement with body', () => {
  const text = newText('abc\n aabc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first();

  expect(statements.count()).toBe(1);
  expect((node?.body?.first()?.value as IdNode).text.toNativeString()).toBe('aabc');
  expect(node).toBeTruthy();
  expect(is(node, $StatementNode2)).toBe(true);
});

test('Statement with group', () => {
  const text = newText('[1, 2,]');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first()?.value as GroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $GroupNode)).toBe(true);
  expect(node.items.count()).toBe(2);
});
