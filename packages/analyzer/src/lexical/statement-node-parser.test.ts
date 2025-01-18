import {
  $StatementNode2,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatementsUntil,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Statement', () => {
  const text = newText('abc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStatementsUntil(context).statements.first();

  expect(node).toBeTruthy();
  expect(is(node, $StatementNode2)).toBe(true);
});
