import {
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  parseCharacterNode,
} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {expect, test} from 'vitest';

test('No errors', () => {
  const text = newText("'a'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Only character expect but empty', () => {
  const text = newText("''");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Only character expect');
});

test('Only character expect but many', () => {
  const text = newText("'abc'");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Only character expect');
});

test('Close token expect', () => {
  const text = newText("'a");
  const diagnostics = charNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Close token expect');
});

function charNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseCharacterNode(context);
  const diagnosticContext = newDiagnosticContext();
  node?.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
