import {
  newAnalyzerContext,
  newCharacterStreamFromText,
  newDiagnosticContext,
  parseStringNode,
} from '#analyzer';
import {ArrayData, newText, Text} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {expect, test} from 'vitest';

test('String has no errors', () => {
  const text = newText('"abc"');
  const diagnostics = stringNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(0);
});

test('Close token expect', () => {
  const text = newText('"abc');
  const diagnostics = stringNodeDiagnostics(text);

  expect(diagnostics.count()).toBe(1);
  expect(diagnostics.first()?.message.toNativeString()).toBe('Close token expect');
});

function stringNodeDiagnostics(text: Text): ArrayData<AnalyzerDiagnostic> {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseStringNode(context);
  const diagnosticContext = newDiagnosticContext();

  node!.diagnose!(diagnosticContext);

  return diagnosticContext.diagnostics;
}
