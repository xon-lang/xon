import {newAnalyzerContext, newCharacterStreamFromText, parseCharacterNode} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {expect, test} from 'vitest';

test('No errors', () => {
  const text = newText("'a'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Expect only character but empty', () => {
  const text = newText("''");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Expect only character');
});

test('Expect only character but many', () => {
  const text = newText("'abc'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Expect only character');
});

test('Expect close token', () => {
  const text = newText("'a");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Expect close token');
});

function charNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterNode(context);

  return node!.diagnose!();
}
