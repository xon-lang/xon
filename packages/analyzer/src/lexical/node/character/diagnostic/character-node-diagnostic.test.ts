import {newAnalyzerContext, parseCharacterNode} from '#analyzer';
import {ArrayData, charStreamFromText, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {expect, test} from 'vitest';

test('Character has no errors', () => {
  const text = newText("'a'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Character has no content', () => {
  const text = newText("''");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.actual.toNativeString()).toBe('Character has no content');
});

test('Character contains 3 elements', () => {
  const text = newText("'abc'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.actual.toNativeString()).toBe('Character contains 3 elements');
});

test('Character does not have a closing quote', () => {
  const text = newText("'a");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.actual.toNativeString()).toBe(
    'Character does not have a closing quote',
  );
});

function charNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterNode(context);
  return node!.diagnose!();
}
