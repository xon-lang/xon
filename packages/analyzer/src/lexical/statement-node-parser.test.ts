import {
  $StatementNode2,
  IdNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatementsUntil,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Statement', () => {
  const text = newText('abc\n aabc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatementsUntil(context).statements;
  const node = statements.first();

  expect(statements.count()).toBe(1);
  expect((node?.body?.first()?.value as IdNode).text.toNativeString()).toBe('aabc');
  expect(node).toBeTruthy();
  expect(is(node, $StatementNode2)).toBe(true);
});
