import {newAnalyzerContext, newCharacterStreamFromText, parseStatements} from '#analyzer';
import {newText} from '#common';
import {expect, test} from 'vitest';

test('Statement with body', () => {
  const text = newText('abc\n def');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;

  expect(statements.count()).toBe(1);
});
